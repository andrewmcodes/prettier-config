# @andrewmcodes/prettier-config

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

My shareable prettier config that I am tired of hauling around.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

### NPM

```sh
npm install --save-dev @andrewmcodes/prettier-config prettier
```

### Yarn

```sh
yarn add -D @andrewmcodes/prettier-config prettier
```

## Usage

You can use this a few different ways, but the recommended approach is to add it to your `package.json`.

### `package.json`

```javascript
{
  "name": "my-awesome-library",
  "version": "1.0.0",
  "prettier": "@andrewmcodes/prettier-config"
}
```

### `.prettierrc`/`.prettierrc.json`

You can also create a `.prettierrc`/`.prettierrc.json` file in your project's root directory.

```json
"@andrewmcodes/prettier-config"
```

### `.prettierrc.js`

You can modify or extend the config by creating a `.prettierrc.js` file in your project's root directory and exporting your desired modifications.

```javascript
module.exports = {
  ...require("@andrewmcodes/prettier-config"),
  singleQuote: true,
};
```

## Maintainers

- [@andrewmcodes](https://github.com/@andrewmcodes)

## Contributing

See [the contributing file](.github/contributing.md)!

PRs accepted.

## License

MIT © 2020 Andrew Mason
