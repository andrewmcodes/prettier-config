import { ESLint } from "eslint";
import config from "./index";

async function runTests() {
  // Test 1: Config structure
  if (!config.extends || !config.extends.includes("eslint:recommended")) {
    console.error("❌ Config should extend eslint:recommended");
    process.exit(1);
  }
  console.log("✓ Config extends eslint:recommended");

  if (!config.env || !config.env.node) {
    console.error("❌ Config should have node environment enabled");
    process.exit(1);
  }
  console.log("✓ Node environment is enabled");

  // Test 2: Verify environments
  if (!config.env.browser || !config.env.es2021) {
    console.error("❌ Config should have browser and es2021 environments");
    process.exit(1);
  }
  console.log("✓ Browser and ES2021 environments are enabled");

  // Test 3: Verify custom rules
  if (!config.rules || !config.rules["no-console"] || config.rules["no-console"][0] !== "warn") {
    console.error("❌ no-console rule should be set to warn");
    process.exit(1);
  }
  console.log("✓ Custom no-console rule is configured");

  if (!config.rules["no-unused-vars"] || config.rules["no-unused-vars"][0] !== "error") {
    console.error("❌ no-unused-vars rule should be set to error");
    process.exit(1);
  }
  console.log("✓ Custom no-unused-vars rule is configured");

  // Test 4: Lint valid code
  const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: config,
  });

  const validCode = `const message = "hello";\nconsole.warn(message);\n`;
  const validResults = await eslint.lintText(validCode);

  if (validResults[0].errorCount > 0) {
    console.error("❌ Valid code should not have errors:", validResults[0].messages);
    process.exit(1);
  }
  console.log("✓ Valid code passes linting");

  // Test 5: Detect errors in invalid code
  const invalidCode = `const x = 1;\nif (true) {\n  y = 2;\n}\n`;
  const invalidResults = await eslint.lintText(invalidCode);

  if (invalidResults[0].errorCount === 0) {
    console.error("❌ Invalid code should have errors");
    process.exit(1);
  }
  console.log("✓ Invalid code is detected");

  // Test 6: no-console allows warn and error
  const consoleWarnCode = `console.warn("warning");\nconsole.error("error");\n`;
  const consoleWarnResults = await eslint.lintText(consoleWarnCode);

  if (consoleWarnResults[0].errorCount > 0) {
    console.error("❌ console.warn and console.error should be allowed:", consoleWarnResults[0].messages);
    process.exit(1);
  }
  console.log("✓ console.warn and console.error are allowed");

  // Test 7: Unused vars with underscore prefix are ignored
  const unusedUnderscoreCode = `function test(_unused) {\n  return 1;\n}\ntest(1);\n`;
  const unusedUnderscoreResults = await eslint.lintText(unusedUnderscoreCode);

  if (unusedUnderscoreResults[0].errorCount > 0) {
    console.error("❌ Variables with _ prefix should be ignored:", unusedUnderscoreResults[0].messages);
    process.exit(1);
  }
  console.log("✓ Unused variables with _ prefix are ignored");

  console.log("\n✓ All ESLint config tests passed");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
