//import {DataTypes} from 'sequelize';
export default (database) =>{
    
    const Answer = database.define('Answer',{
        /*answer:{
            type:DataTypes.STRING,
            allowNull:false
        }*/
    },{tableName:'answer',timestamps:false});

return Answer;
}