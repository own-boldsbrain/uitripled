console.error(
  "Este script foi migrado para module (ESM). Execute `node scripts/update-components-registries.mjs`."
);
process.exit(1);

async function readJson(fs, filePath) {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error(
      `Não foi possível ler JSON em ${filePath}: ${error.message}`
    );
  }
}

const sortObjectKeys = (obj) =>
  Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))
  );

async function ensureFilePresence(fs, filePath, errorMessage) {
  if (!(await fileExists(fs, filePath))) {
    console.error(errorMessage);
    process.exit(1);
  }
}

function resolveRegistryHandle(meta, entry) {
  if (meta?.name) {
    return meta.name;
  }

  if (entry?.handle) {
    return `@${entry.handle}`;
  }

  return null;
}

async function collectAutoRegistries(fs, path, registriesDir, indexEntries) {
  const registries = {};

  for (const entry of indexEntries) {
    const metaPath = path.join(registriesDir, entry.file);
    if (!(await fileExists(fs, metaPath))) {
      console.warn(
        `⚠️  Arquivo de metadata não encontrado para ${entry.handle}: ${metaPath}`
      );
      continue;
    }

    const meta = await readJson(fs, metaPath);
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
}

async function persistRegistries(fs, configPath, config, autoRegistries) {
  const previousRegistries = config.registries || {};
  const mergedRegistries = {
    ...previousRegistries,
    ...autoRegistries,
  };

  config.registries = sortObjectKeys(mergedRegistries);

  const previousContent = await fs.readFile(configPath, "utf8");
  const nextContent = JSON.stringify(config, null, 2) + "\n";

  if (previousContent === nextContent) {
    console.log("✅ components.json já está atualizado.");
    return;
  }

  await fs.writeFile(configPath, nextContent, "utf8");

  const addedHandles = Object.keys(autoRegistries).filter(
    (handle) => previousRegistries[handle] !== autoRegistries[handle]
  );

  if (addedHandles.length > 0) {
    console.log("✅ Registries atualizados:\n - " + addedHandles.join("\n - "));
  } else {
    console.log("✅ Registries regravados sem alterações detectadas.");
  }
}

function ensureIndexEntriesAreValid(indexEntries) {
  if (!Array.isArray(indexEntries)) {
    console.error("❌ index.json deve conter um array de registries.");
    process.exit(1);
  }
}

importNodeModules().then(
  async ({ fs, path }) => {
    const componentsConfigPath = path.join(__dirname, "..", "components.json");
    const registriesDir = path.join(
      __dirname,
      "..",
      "data",
      "shadcn-registries"
    );
    const indexPath = path.join(registriesDir, "index.json");

    await ensureFilePresence(
      fs,
      componentsConfigPath,
      `❌ Arquivo components.json não encontrado em ${componentsConfigPath}`
    );
    await ensureFilePresence(
      fs,
      indexPath,
      `❌ Manifesto index.json não encontrado em ${indexPath}`
    );

    const componentsConfig = await readJson(fs, componentsConfigPath);
    const indexEntries = await readJson(fs, indexPath);

    ensureIndexEntriesAreValid(indexEntries);

    const autoRegistries = await collectAutoRegistries(
      fs,
      path,
      registriesDir,
      indexEntries
    );

    await persistRegistries(
      fs,
      componentsConfigPath,
      componentsConfig,
      autoRegistries
    );
  },
  (error) => {
    console.error("❌ Erro ao atualizar registries:", error);
    process.exit(1);
  }
);
