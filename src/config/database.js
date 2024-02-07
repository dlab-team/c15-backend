import { Sequelize } from "sequelize";

const database = new Sequelize(process.env.POSTGRES_URI);

export { database };
