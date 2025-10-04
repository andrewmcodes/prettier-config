const config = require("./index");

if (!config.extends || !config.extends.includes("@commitlint/config-conventional")) {
  console.error("Config should extend @commitlint/config-conventional");
  process.exit(1);
}

console.log("✓ Commitlint config is valid");
