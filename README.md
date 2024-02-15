## Project name - TODO
## Project description - TODO
## Prerequisites.

Before you proceed with the installation, please [download and install Node.js](https://nodejs.org/en/download/).

Dependencies installation is done using the [`npm init` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install
```
## Settings

Create a .env file in the root of the repository from .env.example (the port must match with the one configured in the frontend repository).


## You can run the application in a containerized database

For containerized database run (open docker desktop in background):
``` docker-compose up ```

(If you need to do any settings changes, you will need to run docker-compose down to apply changes, and then docker-compose up --build)

## Fill up the database with the seeders (in the backend terminal through docker desktop):

``` npx sequelize db:seed:all ``` 


## Quick Start

Run the following command and wait to see "Server running, port: {number}" in the console.

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