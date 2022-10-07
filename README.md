
## Description

An application for preparing and performing retrospectives

## Installation

Create a '.env' file with the following content: 
```
DATABASE_URL="postgresql://username:password@localhost:5432/databasename"
```

Run the following commands
```bash
$ npm install
$ npx prisma migrate dev
$ npx prisma db seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

