import {DataTypes} from 'sequelize';
import Question from './question.js';

export default (database)=>{
    const Option = database.define('option',{

        number:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        answer:{
            // Aca creo que en ves de String se deberia
            // colocar un enum, queda a discusion
            type:DataTypes.STRING,
            allowNull: false
        },
        score:{
            type:DataTypes.INTEGER,
            allowNull: false
        }
    }, {timestamps:false});

return Option;
}