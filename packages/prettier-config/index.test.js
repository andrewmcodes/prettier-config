const prettier = require("prettier");
const config = require("./index");

describe("Prettier Configuration", () => {
  test("config object has printWidth property set to 120", () => {
    expect(config.printWidth).toBe(120);
  });

  test("Configuration should format code correctly", () => {
    const sourceCode = "const x = { a:1, b:2, }";
    const formattedCode = prettier.format(sourceCode, { ...config, parser: "babel" });
    expect(formattedCode).toBe(`const x = { a: 1, b: 2 };\n`);
  });

  test("Long lines should wrap at 120 characters", () => {
    const longLine = `const myVeryLongVariableName = { property1: "value1", property2: "value2", property3: "value3", property4: "value4", property5: "value5" };`;
    const formatted = prettier.format(longLine, { ...config, parser: "babel" });
    const lines = formatted.split("\n").filter((line) => line.trim());

    // Check that lines are broken when they would exceed 120 chars
    const hasLongLine = lines.some((line) => line.length > 120);
    expect(hasLongLine).toBe(false);
  });

  test("Arrays should be formatted correctly", () => {
    const sourceCode = `const arr = [1,2,3,4,5];`;
    const formatted = prettier.format(sourceCode, { ...config, parser: "babel" });
    expect(formatted).toBe(`const arr = [1, 2, 3, 4, 5];\n`);
  });

  test("Function calls with many arguments should wrap appropriately", () => {
    const sourceCode = `someFunction(argument1, argument2, argument3, argument4, argument5, argument6, argument7, argument8, argument9, argument10);`;
    const formatted = prettier.format(sourceCode, { ...config, parser: "babel" });

    // Should wrap when line exceeds printWidth
    expect(formatted.includes("\n")).toBe(true);
  });

  test("JSX/TSX formatting works", () => {
    const jsxCode = `const Component = () => <div className="container"><span>Hello World</span></div>;`;
    const formatted = prettier.format(jsxCode, { ...config, parser: "babel" });

    expect(formatted).toContain("<div");
    expect(formatted).toContain("</div>");
  });

  test("JSON formatting works", () => {
    const jsonCode = `{"name":"test","version":"1.0.0","description":"A test package"}`;
    const formatted = prettier.format(jsonCode, { ...config, parser: "json" });

    expect(formatted).toContain('"name": "test"');
    expect(formatted).toContain('"version": "1.0.0"');
  });

  test("Markdown formatting works", () => {
    const markdown = `# Title\n\nThis is a paragraph with a [link](https://example.com) in it.`;
    const formatted = prettier.format(markdown, { ...config, parser: "markdown" });

    expect(formatted).toContain("# Title");
    expect(formatted).toContain("[link](https://example.com)");
  });

  test("Object properties are properly spaced", () => {
    const sourceCode = `const obj = {a:1,b:2,c:3};`;
    const formatted = prettier.format(sourceCode, { ...config, parser: "babel" });

    expect(formatted).toContain("a: 1");
    expect(formatted).toContain("b: 2");
    expect(formatted).toContain("c: 3");
  });

  test("Trailing commas are removed from objects", () => {
    const sourceCode = `const obj = { a: 1, b: 2, };`;
    const formatted = prettier.format(sourceCode, { ...config, parser: "babel" });

    expect(formatted).toBe(`const obj = { a: 1, b: 2 };\n`);
  });
});
