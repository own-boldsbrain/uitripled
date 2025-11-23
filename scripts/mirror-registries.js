const fs = require("fs");
const path = require("path");

if (typeof fetch !== "function") {
  console.error(
    "Global fetch API is not available. Please run this script on Node.js 18 or newer."
  );
  process.exit(1);
}

const fsp = fs.promises;

const __dirnameResolved = __dirname;
const SHADCN_REGISTRIES_DIR = path.join(
  __dirnameResolved,
  "../data/shadcn-registries"
);
const REGISTRY_INDEX_PATH = path.join(SHADCN_REGISTRIES_DIR, "index.json");
const MIRROR_OUTPUT_DIR = path.join(
  __dirnameResolved,
  "../data/registry-mirror"
);

const headers = {
  "User-Agent": "uitripled-mirror-script/1.0",
  Accept: "application/json",
};

function normalizeHandle(value) {
  return value.toLowerCase();
}

const filterHandles = process.argv
  .slice(2)
  .map((arg) => arg.trim())
  .filter(Boolean)
  .map(normalizeHandle);

function shouldProcessHandle(handle) {
  if (filterHandles.length === 0) {
    return true;
  }

  return filterHandles.includes(normalizeHandle(handle));
}

async function readJson(filePath) {
  const buffer = await fsp.readFile(filePath, "utf8");
  return JSON.parse(buffer);
}

async function fetchJson(url, contextLabel) {
  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const text = await response.text();

    try {
      return JSON.parse(text);
    } catch (jsonError) {
      throw new Error(
        `Failed to parse JSON for ${contextLabel}. Received: ${text.slice(0, 200)}...`
      );
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Unable to fetch ${contextLabel} from ${url}: ${message}`);
  }
}

async function prepareDirectory(directoryPath) {
  await fsp.rm(directoryPath, { recursive: true, force: true });
  await fsp.mkdir(directoryPath, { recursive: true });
}

function applyItemPattern(pattern, item) {
  return pattern.replace(/\$\{(name|encodedName)\}/g, (match, token) => {
    if (token === "name") {
      return item.name;
    }

    if (token === "encodedName") {
      return encodeURIComponent(item.name);
    }

    return match;
  });
}

async function processRegistry(entry) {
  const { handle, file } = entry;

  if (!shouldProcessHandle(handle)) {
    return {
      handle,
      skipped: true,
      reason: "filtered",
    };
  }

  const metadataPath = path.join(SHADCN_REGISTRIES_DIR, file);

  if (!fs.existsSync(metadataPath)) {
    return {
      handle,
      skipped: true,
      reason: `metadata file not found: ${file}`,
    };
  }

  const metadata = await readJson(metadataPath);
  const registryConfig = metadata.registry;

  if (!registryConfig || !registryConfig.manifestUrl) {
    return {
      handle,
      skipped: true,
      reason: "manifestUrl not provided",
    };
  }

  console.log(`\n📦 Fetching registry for ${handle}`);

  const handleOutputDir = path.join(MIRROR_OUTPUT_DIR, handle);
  await prepareDirectory(handleOutputDir);

  const manifest = await fetchJson(
    registryConfig.manifestUrl,
    `${handle} manifest`
  );
  await fsp.writeFile(
    path.join(handleOutputDir, "registry.json"),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );

  let itemsFetched = 0;
  const errors = [];

  const itemPattern = registryConfig.itemUrlPattern;
  const manifestItems = Array.isArray(manifest.items) ? manifest.items : [];

  if (itemPattern && manifestItems.length > 0) {
    const itemsDir = path.join(handleOutputDir, "items");
    await fsp.mkdir(itemsDir, { recursive: true });

    for (const item of manifestItems) {
      if (!item || typeof item.name !== "string" || item.name.length === 0) {
        errors.push(`Skipping item with invalid name in ${handle}`);
        continue;
      }

      const itemUrl = applyItemPattern(itemPattern, item);
      const safeItemName = item.name
        .replace(/[^a-z0-9-_]/gi, "-")
        .toLowerCase();

      try {
        const itemJson = await fetchJson(
          itemUrl,
          `${handle} item ${item.name}`
        );
        await fsp.writeFile(
          path.join(itemsDir, `${safeItemName}.json`),
          JSON.stringify(itemJson, null, 2),
          "utf8"
        );
        itemsFetched += 1;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        errors.push(message);
        console.warn(`   ⚠️  ${message}`);
      }
    }
  } else if (!itemPattern) {
    console.log(
      `   ℹ️  No itemUrlPattern provided for ${handle}; skipping item download.`
    );
  } else if (manifestItems.length === 0) {
    console.log(`   ℹ️  Manifest for ${handle} has no items to mirror.`);
  }

  console.log(
    `   ✅ Manifest saved (${manifestItems.length} items listed, ${itemsFetched} mirrored).`
  );

  return {
    handle,
    skipped: false,
    itemsListed: manifestItems.length,
    itemsFetched,
    errors,
  };
}

async function main() {
  try {
    await fsp.mkdir(MIRROR_OUTPUT_DIR, { recursive: true });

    const index = await readJson(REGISTRY_INDEX_PATH);

    if (!Array.isArray(index)) {
      throw new Error("Registry index must be an array");
    }

    const results = [];

    for (const entry of index) {
      const result = await processRegistry(entry);
      results.push(result);
    }

    const processed = results.filter((result) => !result.skipped);
    const skipped = results.filter((result) => result.skipped);

    const totalFetched = processed.reduce(
      (sum, result) => sum + (result.itemsFetched || 0),
      0
    );
    const totalListed = processed.reduce(
      (sum, result) => sum + (result.itemsListed || 0),
      0
    );

    const registriesWithErrors = processed.filter(
      (result) => result.errors && result.errors.length > 0
    );

    console.log("\n===== Mirror Summary =====");
    console.log(`Registries processed: ${processed.length}`);
    console.log(`Registries skipped: ${skipped.length}`);
    console.log(`Items listed: ${totalListed}`);
    console.log(`Items mirrored: ${totalFetched}`);

    if (registriesWithErrors.length > 0) {
      console.log("\nErrors:");
      for (const registry of registriesWithErrors) {
        console.log(` - ${registry.handle}:`);
        for (const error of registry.errors) {
          console.log(`     • ${error}`);
        }
      }
    }

    console.log("==========================\n");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Mirror script failed:", message);
    process.exit(1);
  }
}

main();
