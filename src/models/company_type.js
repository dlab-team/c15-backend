import { DataTypes } from 'sequelize';

export default (database)=>{
    const CompanyType = database.define('Company_Type',{
        type:{
            type:DataTypes.STRING,
            allowNull: false
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false
        },
    }, {tableName:'company_types',timestamps: false});
return CompanyType;
}
