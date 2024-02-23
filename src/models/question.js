import {DataTypes} from 'sequelize';

export default (database) =>{
    const Question = database.define('Question',{
        question:{
            type:DataTypes.STRING,
            allowNull:false
        },
        id_pillar: {
            type: DataTypes.INTEGER,
            allowNull: true 
        }
    }, {tableName:'question',timestamps: false});
    
return Question;
};

