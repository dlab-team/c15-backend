import { Sequelize } from "sequelize";

const name = process.env.POSTGRES_DATABASE;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_DOCKER_PORT;

const database = new Sequelize(name, username, password, {
    host: host,
    dialect: 'postgres',
    port: port
});

export { database };
