const stylelint = require("stylelint");
const config = require("./index");

async function runTests() {
  // Test 1: Config structure
  if (!config.extends || !config.extends.includes("stylelint-config-standard")) {
    console.error("❌ Config should extend stylelint-config-standard");
    process.exit(1);
  }
  console.log("✓ Config extends stylelint-config-standard");

  if (!config.rules || !config.rules["at-rule-no-unknown"]) {
    console.error("❌ Config should have at-rule-no-unknown rule");
    process.exit(1);
  }
  console.log("✓ at-rule-no-unknown rule is configured");

  // Test 2: Verify Tailwind at-rules are ignored
  const tailwindAtRules = config.rules["at-rule-no-unknown"][1].ignoreAtRules;
  const expectedAtRules = ["tailwind", "apply", "variants", "responsive", "screen"];

  for (const rule of expectedAtRules) {
    if (!tailwindAtRules.includes(rule)) {
      console.error(`❌ Missing Tailwind at-rule: ${rule}`);
      process.exit(1);
    }
  }
  console.log("✓ Tailwind CSS at-rules are configured");

  // Test 3: Lint valid CSS
  const validCSS = `.test {\n  color: red;\n  display: flex;\n}\n`;
  const validResult = await stylelint.lint({
    code: validCSS,
    config: config,
  });

  if (validResult.errored) {
    console.error("❌ Valid CSS should not have errors:", validResult.results[0].warnings);
    process.exit(1);
  }
  console.log("✓ Valid CSS passes linting");

  // Test 4: Detect errors in invalid CSS
  const invalidCSS = `.test {\n  colour: red;\n}\n`;
  const invalidResult = await stylelint.lint({
    code: invalidCSS,
    config: config,
  });

  if (!invalidResult.errored) {
    console.error("❌ Invalid CSS should have errors");
    process.exit(1);
  }
  console.log("✓ Invalid CSS is detected");

  // Test 5: Tailwind at-rules are allowed
  const tailwindCSS = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n.btn {\n  @apply px-4 py-2;\n}\n`;
  const tailwindResult = await stylelint.lint({
    code: tailwindCSS,
    config: config,
  });

  if (tailwindResult.errored) {
    console.error("❌ Tailwind CSS should be valid:", tailwindResult.results[0].warnings);
    process.exit(1);
  }
  console.log("✓ Tailwind CSS at-rules are allowed");

  // Test 6: Standard CSS at-rules work
  const standardAtRuleCSS = `@media (width >= 768px) {\n  .test {\n    color: blue;\n  }\n}\n`;
  const standardAtRuleResult = await stylelint.lint({
    code: standardAtRuleCSS,
    config: config,
  });

  if (standardAtRuleResult.errored) {
    console.error("❌ Standard at-rules should be valid:", standardAtRuleResult.results[0].warnings);
    process.exit(1);
  }
  console.log("✓ Standard CSS at-rules work");

  console.log("\n✓ All Stylelint config tests passed");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
