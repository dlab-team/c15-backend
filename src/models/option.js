import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';
import {Question} from './question.js';

const Option = database.define('Option',{
    id:{
        type:DataTypes.NUMBER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true
    },
    number:{
        type:DataTypes.NUMBER,
        allowNull: false
    },
    answer:{
        // Aca creo que en ves de String se deberia
        // colocar un enum, queda a discusion
        type:DataTypes.STRING,
        allowNull: false
    },
    score:{
        type:DataTypes.NUMBER,
        allowNull: false
    },
    id_question:{
        type:DataTypes.NUMBER,
        references:{
            model:Question,
            key:'id'
        }
    }
}, {tableName:'option', timestamps:false});

Option.hasOne(Question,{foreignKey:'id_question', targetKey:'id'});

export{Option}