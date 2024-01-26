import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';
import {Role} from './role.js';
 
const User = database.define('User',{
    id:{
        type:DataTypes.NUMBER,
        primaryKey: true,
        allowNull:true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type:DataTypes.NUMBER,
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
    create_at:{
        type:DataTypes.DATE,
        allowNull: false
    },
    update_at:{
        type:DataTypes.DATE,
        allowNull: false
    },
    id_role:{
        type:DataTypes.NUMBER,
        references:{
            model:Role,
            key:'id'
        }
    }

}, {
    tableName:'user',
    timestamps: false, 
}); 

//Relación N-1: Usuario pertenece a un Role
User.belongsTo(Role, {foreignKey: 'id_role', targetKey: 'id'});

export{User}