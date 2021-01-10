# express-typeorm-starter

This is a simple boilerplate project for usage of ExpressJS with TypeORM.

## Features

- Per-environment configuration of TypeORM (sqlite for test / development, empty for production)
- Authentication middleware to fill in function of your authentication flow
- Authorization middleware to protect your app on a per-endpoint basis
- Logging using morgan
- TypeScript

## Usage

### Install dependencies

```bash
yarn
```

### Apply migrations

```bash
yarn typeorm migration:run
```

### Fill production TypeORM configuration (Optionnal)

The TypeORM configuration used depends on the `NODE_ENV` environment variable.

In production, this variable should be set to `production` and the database to use must be added to the TypeORM configuration, `ormconfig.js`.

### Development

```bash
yarn develop
```

The entrypoint is the `index.ts` file, the app is watched and will be re-ran upon changes.
