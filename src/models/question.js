import {DataTypes} from 'sequelize';

export default (database) =>{
    const Question = database.define('Question',{
        question:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }, {tableName:'question',timestamps: false});
    
return Question;
};

