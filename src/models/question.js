import { DataTypes } from 'sequelize';

export default (database) =>{
    const Question = database.define('Question',{
        question:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }, {tableName:'questions',timestamps: false});
return Question;
};
