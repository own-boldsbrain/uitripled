const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "data", "shadcn-registries");

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
let errors = 0;
files.forEach((file) => {
  const full = path.join(dir, file);
  try {
    const data = fs.readFileSync(full, "utf8");
    JSON.parse(data);
    console.log(`OK: ${file}`);
  } catch (err) {
    console.error(`ERROR parsing ${file}:`, err.message);
    errors++;
  }
});

if (errors > 0) {
  console.error(`Found ${errors} parsing error(s).`);
  process.exit(1);
} else {
  console.log(`All ${files.length} JSON files parsed successfully.`);
}
