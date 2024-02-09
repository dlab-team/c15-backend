import { database } from "../config/database.js";
import useBcrypt from "sequelize-bcrypt";
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
//Asociaciones
import associations from "./associations.js";

const models = {
    User:userModel(database),
    Pillar:pillarModel(database),
    CompanyType:companyTypeModel(database),
    Company:companyModel(database),
    Diagnostic:diagnosticModel(database),
    PillarDiagnostic:pillarDiagnosticModel(database),
    PillarMessage:pillarMessageModel(database),
    Role:roleModel(database),
    Option:optionModel(database),
    Question:questionModel(database),
    Answer:answerModel(database),
    BlogPost:blogPostModel(database)
};

//Asociaciones entre modelos
associations(models);

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

export {models};  