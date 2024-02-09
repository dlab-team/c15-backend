import {DataTypes} from 'sequelize';
import Pillar from './pillar.js';

export default (database) =>{
    const Question = database.define('question',{
        question:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }, {timestamps: false});
    
return Question;
};

