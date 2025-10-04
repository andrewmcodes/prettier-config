# @andrewmcodes/stylelint-config

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![npm](https://img.shields.io/npm/v/@andrewmcodes/stylelint-config)

This is a shareable [Stylelint](https://stylelint.io/) configuration with sensible defaults for CSS/SCSS projects.

## Installation

```shell
# npm
npm install --save-dev @andrewmcodes/stylelint-config stylelint
# yarn
yarn add -D @andrewmcodes/stylelint-config stylelint
# pnpm
pnpm add -D @andrewmcodes/stylelint-config stylelint
```

## Usage

Create a `.stylelintrc.js` file in your project root:

```javascript
module.exports = {
  extends: ["@andrewmcodes/stylelint-config"],
};
```

Or add it to your `package.json`:

```json
{
  "stylelint": {
    "extends": ["@andrewmcodes/stylelint-config"]
  }
}
```

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
