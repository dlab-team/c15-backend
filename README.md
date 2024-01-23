## Project name - TODO
## Project description - TODO
## Prerequisites

Before you proceed with the installation, please [download and install Node.js](https://nodejs.org/en/download/) and [Docker compose](https://www.docker.com/get-started).

Dependencies installation is done using the [`npm init` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm init
```
## Settings

Create a .env file in the root of the repository with the variable PORT={number} (the port must match the one configured in the frontend repository).

Update the PostgreSQL configuration in `docker-compose.yml`:
Adjust the values of `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB` to match your desired database configuration.

Update the PostgreSQL configuration in `app.js`:
Adjust the values of `user`, `host`, `database`, and `password` to match your desired database configuration.

## Quick Start

 Start the PostgreSQL container:

    ```bash
    docker-compose up
    ```

Start the Nodejs app:  (wait until see "Server running, port: {number}" in the console).

```bash
$ npm run dev
```

The project uses Nodemon, which means the server will automatically restart every time a change is made in any file.

## Stopping the Application

To stop the application and PostgreSQL container, run:

```bash
docker-compose down
```

And ctrl c for the application.

## Authors

Cinthya Calbete
Jose Dominguez
Hipólito Cayupi
Felipe Azócar
