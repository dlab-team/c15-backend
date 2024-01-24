import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';

const CompanyType = database.define('CompanyType',{
    id:{
        type:DataTypes.NUMBER,
        primaryKey: true,
        allowNull:true,
        autoIncrement: true
    },
    type:{
        type:DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull: false
    },
}, {tableName:'company_type', timestamps: false});


export{CompanyType};