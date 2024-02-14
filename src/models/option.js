import {DataTypes} from 'sequelize';

export default (database)=>{
    const Option = database.define('Option',{

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
            type:DataTypes.DOUBLE,
            allowNull: false
        }
    }, {tableName:'option',timestamps:false});

return Option;
}