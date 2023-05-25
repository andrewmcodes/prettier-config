# @andrewmcodes/prettier-config

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![npm](https://img.shields.io/npm/v/@andrewmcodes/prettier-config)
[![CI](https://github.com/andrewmcodes/prettier-config/actions/workflows/ci.yml/badge.svg)](https://github.com/andrewmcodes/prettier-config/actions/workflows/ci.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

This is a shareable [Prettier](https://prettier.io/) configuration, which includes a set of preferred styling rules that can be easily extended.

## Installation

```shell
# npm
npm install --save-dev @andrewmcodes/prettier-config
# yarn
yarn add -D @andrewmcodes/prettier-config
```

## Usage

You can use this a few different ways, but the recommended approach is to add it to your `package.json`:

```json
"prettier": "@andrewmcodes/prettier-config"
```

If you don’t want to use package.json, you can use any of the supported extensions to export a string, e.g. .prettierrc.json:

```json
"@andrewmcodes/prettier-config"
```

If you need to extend the configuration, you can use the .js extension and export an object:

```javascript
module.exports = {
  ...require("@andrewmcodes/prettier-config"),
  semi: false,
};
```

## Contributing

I'd love your help refining this package. Please don't hesitate to send a pull request.

### Code Style

Run `yarn format` before committing to ensure your changes comply with our coding style.

### Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Please make sure your commit messages follow this format.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
