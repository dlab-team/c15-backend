import { Sequelize } from 'sequelize'
import useBcrypt from 'sequelize-bcrypt';
import dotenv from 'dotenv';
dotenv.config();

// Importar modelos
import userModel from "./user.js";
import questionModel from './question.js';
import pillarModel from './pillar.js';
import pillarDiagnosticModel from './pillar_diagnostic.js';
import pillarMessageModel from './pillar_message.js';
import optionModel from './option.js';
import diagnosticModel from './diagnostic.js';
import companyModel from './company.js';
import companyTypeModel from './company_type.js';
import answerModel from './answer.js';
import roleModel from './role.js';
import blogPostModel from './blog_post.js';

const connection_string = process.env.POSTGRES_URI || `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;

const database = new Sequelize(connection_string);

const models = {
  User:userModel(database),
  Pillar:pillarModel(database),
  Question:questionModel(database),
  Option:optionModel(database),
  CompanyType:companyTypeModel(database),
  Company:companyModel(database),
  Diagnostic:diagnosticModel(database),
  PillarDiagnostic:pillarDiagnosticModel(database),
  PillarMessage:pillarMessageModel(database),
  Role:roleModel(database),
  Answer:answerModel(database),
  BlogPost:blogPostModel(database)
};

// Encriptar contraseñas
useBcrypt(models.User);

// Crear asociaciones
import associations from './associations.js';
associations(models);

// Sincronizar todos los modelos
// { force = true } borra la base de datos y luego la vuelve a sincronizar.
// Útil para desarrollo, remover en producción
await database.sync({ force: false })
    .then(() => {
    console.log("Drop and re-sync db.")
    })
    .catch((err) => {
    console.log("Failed to sync db: " + err);
    });
    

models.database = database;
export default models;
