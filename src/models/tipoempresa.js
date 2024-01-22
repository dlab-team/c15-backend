import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';
import {Empresa} from './empresa.js';

const TipoEmpresa = database.define('TipoEmpresa',{
    id_tipo_empresa:{
        type:DataTypes.NUMBER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true
    },
    nombre_tipo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull: false
    },
}, {tableName:'tipo_empresa', timestamps: false});

TipoEmpresa.belongsTo(Empresa);

export{TipoEmpresa};