import { Sequelize } from "sequelize";

const database = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_DOCKER_PORT,
    dialect: 'postgres'
});

export { database };