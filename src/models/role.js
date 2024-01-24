import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';
 
const Role = database.define('Role',{
    id:{
        type:DataTypes.NUMBER,
        primaryKey: true,
        allowNull:true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull: false
    }

}, {tableName:'role',timestamps: false});

export{Role}