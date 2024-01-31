import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';
import {Pillar} from './pillar.js';

const Question = database.define('Question',{
    id:{
        type:DataTypes.NUMBER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true
    },
    question:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id_pillar:{
        type:DataTypes.NUMBER,
        references:{
            model:Pillar,
            key:'id'
        }
    }
}, {tableName:'question', timestamps: false});

Question.hasOne(Pillar,{foreignKey:'id_pillar', targetKey: 'id'});

// Creo que deberia tener un campo que haga esta conexion de tener
// varias opciones, pendiente revision
//Question.hasMany(Option,{foreignKey:'id_option', targetKey: 'id'});

export{Question}