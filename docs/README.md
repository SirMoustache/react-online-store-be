# Documentation

## Files

`.env` environment variables

`createServer.js` GraphQL Yoga server config. `Query` for 'pull' data `Mutation` for 'push'

`schema.graphql` Public API for Front-end client (React, for example), 

`db.js` DB connect config file with `prisma-binding`

`datamodel.prisma` Prisma datamodel. `generated/prisma.graphql` is generated from this file during deploy

## Yoga

GrapthQL express server for FE

## Prisma

Auth with Prisma

GraphQL database interfase

```bash
npm run prisma -- login
```

Deploy Prisma

```bash
npm run prisma -- deploy
```

open Prisma Dashboard

```bash
npm run prisma -- console
```

Init new Prisma playgroung

```
npm run prisma -- init
# Demo Server
# eu
# name
# stage
# Prisma Client - Don't generate
```


Mutation example

```qraphql
mutation createUser {
  createUser(name: "UserName", email: "email@mail") {
    id
    email
  }
}
```

Query example

```qraphql
query getUsers {
  users {
    id
    name
    email
  }
}
```