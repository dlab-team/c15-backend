import { DataTypes } from 'sequelize';

export default (database)=>{
    const Company = database.define('Company',{
        name:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },{ tableName: 'companies' });
    return Company;
}
