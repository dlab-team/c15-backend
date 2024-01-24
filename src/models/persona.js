import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';
import {Empresa} from './empresa.js';
 
const Persona = database.define('Persona',{
    id_persona:{
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4
    },
    nombres:{
        type:DataTypes.STRING,
        allowNull: false
    },
    apellidos:{
        type:DataTypes.STRING,
        allowNull: false
    },
    rut:{
        type:DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type:DataTypes.NUMBER,
        allowNull: false
    },
    creado_en:{
        type:DataTypes.DATE,
        allowNull: false
    },
    modificado_en:{
        type:DataTypes.DATE,
        allowNull: false
    }

}, {tableName:'persona',timestamps: false}); //timestamps añade fecha de creación y modificación a las columnas createAt y updateAt

Persona.hasMany(Empresa, {foreignKey: 'id_empresa'});

export{Persona}