# @andrewmcodes/prettier-config

My shareable prettier config that I am tired of hauling around.

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

You can use this a few different ways, but the recommended approach is to add it to your `package.json`:

```diff
+  "prettier": "@andrewmcodes/prettier-config"
```

or your Prettier JSON/YAML/TOML config file, such as `.prettierrc`:

```json
"@andrewmcodes/prettier-config"
```

or your Prettier JS config file `prettier.config.js`.

```javascript
module.exports = require("@andrewmcodes/prettier-config");
```

## Modifying

You can modify or extend the config by creating a `prettier.config.js` file in your project's root directory and exporting your desired modifications. See [Prettier's documentation on sharing configs](https://prettier.io/docs/en/configuration.html#sharing-configurations) for more information.

```javascript
module.exports = {
  ...require("@andrewmcodes/prettier-config"),
  singleQuote: true,
};
```

## Contributing

Contributions are always welcome, but this is my personal playground so I may want to solve the issue my own way or not at all. If anything, I'd encourage you to fork this and build your own!

Bug reports and pull requests are accepted on GitHub at https://github.com/andrewmcodes/prettier-config. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/andrewmcodes/.github/blob/main/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in my project's codebases, issue trackers, chat rooms and mailing lists are expected to follow the [code of conduct](https://github.com/andrewmcodes/.github/blob/main/CODE_OF_CONDUCT.md).
