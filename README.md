## Project name - TODO
## Project description - TODO
## Prerequisites.

Before you proceed with the installation, please [download and install Node.js](https://nodejs.org/en/download/).

Dependencies installation is done using the [`npm init` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install
```
## Setting up the environment variables

Create a .env file in the root of the project using .env.example as a base. The values inside .env.example can be used as is, but it is recommended to change them in production.

**Remember the port must match with the one configured in the frontend repository!**

## Setting up a Postgres docker container

### From the command line

```bash
$ docker run --name c15-database --env-file ./.env -p 5433:5432 -d postgres:latest
```

This command will create a container using the latest image of Postgres with the user and password defined in the .env file. After creating it you can start this container with `docker start c15-database`.

### From docker desktop

Run your Postgres image and in the optional settings add these variables:

**Make sure they match the ones you have in your .env file!**

![Postgres optional settings](/readme/postgres_docker_desktop.webp)

## Seed the database

To seed the database with placeholder values you can use this command:

```bash
$ npx sequelize db:seed:all
```

Currently when you launch the app it will drop all the tables in the database before creating them from scratch, you can change this behavior by going to index.js and removing `{ force: false }` from `database.sync()`.

The application uses [Sequelize CLI](https://github.com/sequelize/cli) to manage migrations and seeds, you can check its documentation to get started.

## Start the app (development)

Run the following command and wait until you see `The Express application is running on port:####` in the terminal.

```bash
$ npm run dev
```

The project uses Nodemon, which means the server will automatically restart every time a change is made in any file.

## Authors

Cinthya Calbete
Jose Dominguez
Hipólito Cayupi
Felipe Azócar
Jonathan Ruiz
