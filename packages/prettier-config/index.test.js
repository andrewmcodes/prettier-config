const prettier = require("prettier");
const config = require("./index");

describe("Prettier Configuration", () => {
  test("config object has printWidth property set to 120", () => {
    const config = require("./index");
    expect(config.printWidth).toBe(120);
  });

  test("Configuration should format code correctly", () => {
    const sourceCode = "const x = { a:1, b:2, }";
    const formattedCode = prettier.format(sourceCode, { ...config, parser: "babel" });
    expect(formattedCode).toBe(`const x = { a: 1, b: 2 };\n`);
  });
});
