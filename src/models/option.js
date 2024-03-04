import { DataTypes } from 'sequelize';

export default (database)=>{
    const Option = database.define('Option',{
        order:{
            type:DataTypes.INTEGER
        },
        answer:{
            type:DataTypes.STRING,
            allowNull: false
        },
        score:{
            type:DataTypes.DOUBLE,
            allowNull: false
        }
    }, { tableName: 'options', timestamps: false });
return Option;
}
