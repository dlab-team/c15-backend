import {DataTypes} from 'sequelize';

export default (database)=>{
    const Role = database.define('role',{
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false
        }

    }, {timestamps: false});

    return Role;
}

