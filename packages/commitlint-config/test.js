const load = require("@commitlint/load").default;
const lint = require("@commitlint/lint").default;
const config = require("./index");

async function runTests() {
  // Test 1: Config structure
  if (!config.extends || !config.extends.includes("@commitlint/config-conventional")) {
    console.error("❌ Config should extend @commitlint/config-conventional");
    process.exit(1);
  }
  console.log("✓ Config extends @commitlint/config-conventional");

  // Test 2: Valid conventional commit
  const loadedConfig = await load(config);
  const validResult = await lint(
    "feat: add new feature",
    loadedConfig.rules,
    loadedConfig.parserPreset ? { parserOpts: loadedConfig.parserPreset.parserOpts } : {}
  );

  if (!validResult.valid) {
    console.error("❌ Valid conventional commit should pass:", validResult.errors);
    process.exit(1);
  }
  console.log("✓ Valid conventional commits are accepted");

  // Test 3: Invalid commit format
  const invalidResult = await lint(
    "invalid commit message",
    loadedConfig.rules,
    loadedConfig.parserPreset ? { parserOpts: loadedConfig.parserPreset.parserOpts } : {}
  );

  if (invalidResult.valid) {
    console.error("❌ Invalid commit should fail");
    process.exit(1);
  }
  console.log("✓ Invalid commits are rejected");

  // Test 4: All conventional types work
  const types = ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"];
  for (const type of types) {
    const result = await lint(
      `${type}: test message`,
      loadedConfig.rules,
      loadedConfig.parserPreset ? { parserOpts: loadedConfig.parserPreset.parserOpts } : {}
    );
    if (!result.valid) {
      console.error(`❌ Type '${type}' should be valid:`, result.errors);
      process.exit(1);
    }
  }
  console.log("✓ All conventional commit types are valid");

  console.log("\n✓ All commitlint config tests passed");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
