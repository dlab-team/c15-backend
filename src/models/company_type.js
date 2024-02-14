import {DataTypes} from 'sequelize';

export default (database)=>{
    const CompanyType = database.define('Company_type',{
        type:{
            type:DataTypes.STRING,
            allowNull: false
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false
        },
    }, {tableName:'company_type',timestamps: false});

return CompanyType;
}