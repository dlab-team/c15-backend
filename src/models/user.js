import { DataTypes } from "sequelize";

export default (database) => {
    const User = database.define('user',{
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        }
      
    });
    return User;
};