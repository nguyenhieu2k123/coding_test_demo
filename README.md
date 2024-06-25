# Project Title

Test Interview Project

## Description

A project template for a coding test interview using Prisma, Next.js, tRPC, PostgreSQL, and TypeScript.
[For details:](https://seoulcomix.notion.site/Coding-Test-Assignment-00fd21323fff4d3fb9a51942602ed4b8)
## Getting Started

### Dependencies

* Node: Please using node v20 or later
* PostgreSQL 14.12

### Installing

* Make sure you have [PostgreSQL](https://www.postgresql.org/download/) installed.

### Executing program
* Create a new .env file from .env.example
* Create a new database named `coding_test`. If you want to use a different database name, remember to update the database name in your environment variables.
* Replace the username and password with your own

``` env
NODE_ENV=development
DATABASE_URL="postgresql://username:password@localhost:5432/coding_test"
```


* Run npm i
* Run npx prisma generate
* Run npx prisma migrate dev --name init
* Run npm run seed:all

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors
* My name is Ta Nguyen Hieu or you can call me Hughie
* Contact me via: nguyenhieu2k123@gmail.com
