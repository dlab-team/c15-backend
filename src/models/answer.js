import {DataTypes} from 'sequelize';
import Diagnostic from './diagnostic.js';
import Option from './option.js';

export default (database) =>{
    const Answer = database.define('answer',{
        answer:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });

    return Answer;
}