import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';

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
    }, {
        tableName:'users',
        hooks: {
            beforeCreate: async(user) => {
                user.password = bcrypt.hashSync(user.password, 12)
            },
            beforeUpdate: async(user) => {
                user.password = bcrypt.hashSync(user.password, 12)
            }
        }
    });
    return User;
};
