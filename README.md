# @andrewmcodes Config Monorepo

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![Test](https://github.com/andrewmcodes/prettier-config/actions/workflows/test.yml/badge.svg)](https://github.com/andrewmcodes/prettier-config/actions/workflows/test.yml)
[![Lint](https://github.com/andrewmcodes/prettier-config/actions/workflows/lint.yml/badge.svg)](https://github.com/andrewmcodes/prettier-config/actions/workflows/lint.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

This monorepo contains shareable configurations for various code quality tools.

## Packages

- [@andrewmcodes/prettier-config](./packages/prettier-config) - Prettier configuration
- [@andrewmcodes/commitlint-config](./packages/commitlint-config) - Commitlint configuration
- [@andrewmcodes/eslint-config](./packages/eslint-config) - ESLint configuration
- [@andrewmcodes/stylelint-config](./packages/stylelint-config) - Stylelint configuration

## Development

This monorepo uses [pnpm](https://pnpm.io/) for package management.

### Installation

```shell
pnpm install
```

### Testing

```shell
# Run tests for all packages
pnpm test

# Run tests for a specific package
pnpm --filter @andrewmcodes/prettier-config test
```

### Linting

```shell
# Run linters for all packages
pnpm lint

# Format all files
pnpm format
```

## Contributing

I'd love your help refining these packages. Please don't hesitate to send a pull request.

### Code Style

Run `pnpm format` before committing to ensure your changes comply with our coding style.

### Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Please make sure your commit messages follow this format.

## License

The packages are available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
