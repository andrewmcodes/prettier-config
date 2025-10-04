# @andrewmcodes/commitlint-config

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![npm](https://img.shields.io/npm/v/@andrewmcodes/commitlint-config)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

This is a shareable [Commitlint](https://commitlint.js.org/) configuration based on the [Conventional Commits](https://www.conventionalcommits.org/) specification.

## Installation

```shell
# npm
npm install --save-dev @andrewmcodes/commitlint-config @commitlint/cli
# yarn
yarn add -D @andrewmcodes/commitlint-config @commitlint/cli
# pnpm
pnpm add -D @andrewmcodes/commitlint-config @commitlint/cli
```

## Usage

Create a `commitlint.config.js` file in your project root:

```javascript
module.exports = {
  extends: ["@andrewmcodes/commitlint-config"],
};
```

Or add it to your `package.json`:

```json
{
  "commitlint": {
    "extends": ["@andrewmcodes/commitlint-config"]
  }
}
```

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
