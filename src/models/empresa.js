import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';

const Empresa = database.define('Empresa',{
    id_empresa:{
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4
    },
    nombre_empresa:{
        type:DataTypes.STRING,
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
}, {tableName:'empresa', timestamps: false});


export{Empresa}