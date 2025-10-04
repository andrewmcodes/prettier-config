# @andrewmcodes/eslint-config

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![npm](https://img.shields.io/npm/v/@andrewmcodes/eslint-config)

This is a shareable [ESLint](https://eslint.org/) configuration with sensible defaults for JavaScript projects.

## Installation

```shell
# npm
npm install --save-dev @andrewmcodes/eslint-config eslint
# yarn
yarn add -D @andrewmcodes/eslint-config eslint
# pnpm
pnpm add -D @andrewmcodes/eslint-config eslint
```

## Usage

Create a `.eslintrc.js` file in your project root:

```javascript
module.exports = {
  extends: ["@andrewmcodes/eslint-config"],
};
```

Or add it to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@andrewmcodes/eslint-config"]
  }
}
```

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
