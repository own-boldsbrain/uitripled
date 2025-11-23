import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_CONFIG_PATH = path.join(__dirname, "..", "components.json");
const REGISTRIES_DIR = path.join(__dirname, "..", "data", "shadcn-registries");
const INDEX_PATH = path.join(REGISTRIES_DIR, "index.json");

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const readJson = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error(
      `Não foi possível ler JSON em ${filePath}: ${error.message}`
    );
  }
};

const sortObjectKeys = (obj) =>
  Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))
  );

const ensureFilePresence = async (filePath, errorMessage) => {
  if (!(await fileExists(filePath))) {
    console.error(errorMessage);
    process.exit(1);
  }
};

const resolveRegistryHandle = (meta, entry) => {
  if (meta?.name) {
    return meta.name;
  }

  if (entry?.handle) {
    return `@${entry.handle}`;
  }

  return null;
};

const collectAutoRegistries = async (indexEntries) => {
  const registries = {};

  for (const entry of indexEntries) {
    const metaPath = path.join(REGISTRIES_DIR, entry.file);
    if (!(await fileExists(metaPath))) {
      console.warn(
        `⚠️  Arquivo de metadata não encontrado para ${entry.handle}: ${metaPath}`
      );
      continue;
    }

    const meta = await readJson(metaPath);
    const handle = resolveRegistryHandle(meta, entry);

    if (!handle) {
      console.warn(`⚠️  Registro ignorado por ausência de handle: ${metaPath}`);
      continue;
    }

    const cliBaseUrl = meta.registry?.cliBaseUrl;
    if (!cliBaseUrl) {
      continue;
    }

    registries[handle] = cliBaseUrl;
  }

  return registries;
};

const persistRegistries = async (config, autoRegistries) => {
  const previousRegistries = config.registries || {};
  const mergedRegistries = {
    ...previousRegistries,
    ...autoRegistries,
  };

  config.registries = sortObjectKeys(mergedRegistries);

  const previousContent = await fs.readFile(COMPONENTS_CONFIG_PATH, "utf8");
  const nextContent = JSON.stringify(config, null, 2) + "\n";

  if (previousContent === nextContent) {
    console.log("✅ components.json já está atualizado.");
    return;
  }

  await fs.writeFile(COMPONENTS_CONFIG_PATH, nextContent, "utf8");

  const addedHandles = Object.keys(autoRegistries).filter(
    (handle) => previousRegistries[handle] !== autoRegistries[handle]
  );

  if (addedHandles.length > 0) {
    console.log("✅ Registries atualizados:\n - " + addedHandles.join("\n - "));
  } else {
    console.log("✅ Registries regravados sem alterações detectadas.");
  }
};

const ensureIndexEntriesAreValid = (indexEntries) => {
  if (!Array.isArray(indexEntries)) {
    console.error("❌ index.json deve conter um array de registries.");
    process.exit(1);
  }
};

try {
  await ensureFilePresence(
    COMPONENTS_CONFIG_PATH,
    `❌ Arquivo components.json não encontrado em ${COMPONENTS_CONFIG_PATH}`
  );
  await ensureFilePresence(
    INDEX_PATH,
    `❌ Manifesto index.json não encontrado em ${INDEX_PATH}`
  );

  const componentsConfig = await readJson(COMPONENTS_CONFIG_PATH);
  const indexEntries = await readJson(INDEX_PATH);

  ensureIndexEntriesAreValid(indexEntries);

  const autoRegistries = await collectAutoRegistries(indexEntries);

  await persistRegistries(componentsConfig, autoRegistries);
} catch (error) {
  console.error("❌ Erro ao atualizar registries:", error);
  process.exit(1);
}
