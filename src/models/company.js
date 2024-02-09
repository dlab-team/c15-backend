import {DataTypes} from 'sequelize';

export default (database)=>{
    const Company = database.define('company',{

        name:{
            type:DataTypes.STRING,
            allowNull: false
        }
    });

    return Company;
}