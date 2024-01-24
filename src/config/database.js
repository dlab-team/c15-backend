import {Sequelize} from "sequelize";

const namedb = 'mydb';
const username = 'postgres';
const password = 'admin';
const host = 'localhost';

const database= new Sequelize(namedb, username, password, {
    host: host,
    dialect: 'postgres',
    port: 5432,
  });

export { database};
