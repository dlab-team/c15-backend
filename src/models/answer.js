import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';
import {Diagnostic} from './diagnostic.js';

const Answer = database.define('Answer',{
    id:{
        type:DataTypes.NUMBER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true
    },
    answer:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id_diagnostic:{
        type:DataTypes.NUMBER,
        references:{
            model:Diagnostic,
            key:'id'
        }
    },
    id_option:{
        type:DataTypes.NUMBER,
        references:{
            model:Option,
            key:'id'
        }
    }
}, {tableName:'answer',timestamps:false})

// No estoy seguro que clase de relacion tiene answer con las siguientes tablas
Answer.hasOne(Diagnostic,{foreignKey:'id_diagnostic', targetKey: 'id'});
Answer.hasOne(Option,{foreignKey:'id_option', targetKey: 'id'});

export{Answer}