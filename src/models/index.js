import { Sequelize } from 'sequelize'
import useBcrypt from 'sequelize-bcrypt';
import dotenv from 'dotenv';
dotenv.config();

// Importar modelos
import userModel from "./user.js";

const database = new Sequelize(process.env.POSTGRES_URI);
const models = {
  User: userModel(database)
};

// Encriptar contraseñas
useBcrypt(models.User);

// Sincronizar todos los modelos
// { force = true } borra la base de datos y luego la vuelve a sincronizar.
// Útil para desarrollo, remover en producción
await database.sync({ force: true })
    .then(() => {
    console.log("Drop and re-sync db.")
    })
    .catch((err) => {
    console.log("Failed to sync db: " + err.message);
    });

models.database = database;
export default models;
