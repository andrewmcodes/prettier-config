const config = require("./index");

if (!config.extends || !config.extends.includes("eslint:recommended")) {
  console.error("Config should extend eslint:recommended");
  process.exit(1);
}

if (!config.env || !config.env.node) {
  console.error("Config should have node environment enabled");
  process.exit(1);
}

console.log("✓ ESLint config is valid");
