const config = require("./index");

if (!config.extends || !config.extends.includes("stylelint-config-standard")) {
  console.error("Config should extend stylelint-config-standard");
  process.exit(1);
}

if (!config.rules || !config.rules["at-rule-no-unknown"]) {
  console.error("Config should have at-rule-no-unknown rule");
  process.exit(1);
}

console.log("✓ Stylelint config is valid");
