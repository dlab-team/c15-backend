import { Sequelize } from "sequelize";

// Esto debería ir en .env después
const name = 'mydb';
const username = 'postgres';
const password = 'admin';
const host = 'postgresdb';
const port = 5432;

const database = new Sequelize(name, username, password, {
    host: host,
    dialect: 'postgres',
    port: port
});

export { database };
