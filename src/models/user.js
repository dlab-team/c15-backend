import { DataTypes } from "sequelize";

export default (database) => {
    const User = database.define('User',{
        username:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type:DataTypes.STRING
        }
    }, {});
    return User;
};
