import { DataTypes } from "sequelize";

export default (database) => {
    const User = database.define('User',{
        first_name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type:DataTypes.INTEGER
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        }
    }, {tableName:'users'});
    return User;
};
