import {DataTypes} from 'sequelize';

export default (database)=>{
    const CompanyType = database.define('company_type',{
        type:{
            type:DataTypes.STRING,
            allowNull: false
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false
        },
    }, {timestamps: false});

return CompanyType;
}