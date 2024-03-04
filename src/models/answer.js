//import {DataTypes} from 'sequelize';
export default (database) =>{
    const Answer = database.define('Answer',{
        /*answer:{
            type:DataTypes.STRING,
            allowNull:false
        }*/
    },{tableName:'answers',timestamps:false});
return Answer;
}
