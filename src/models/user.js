import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';

export default (database) => {
    const User = database.define('User',{
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[\p{LC} ]+$/u,
                    msg: "Name can only contain letters and spaces"
                }
            }
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[\p{LC} ]+$/u,
                    msg: "Name can only contain letters and spaces"
                }
            }
        },
        phone:{
            type: DataTypes.STRING,
            validate: {
                isMobilePhone: {
                    args: 'any',
                    msg: "Not a valid phone number (include country code)"
                }
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Not a valid email"
                }
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password_date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    }, {
        tableName: 'users',
        hooks: {
            beforeCreate: async(user) => {
                user.password = bcrypt.hashSync(user.password, 12)
            }
        }
    });
    return User;
};
