import {DataTypes} from 'sequelize';
import {database} from '../config/database.js';
import {User} from '../models/user.js';
import {CompanyType} from './company_type.js';

const Company = database.define('Company',{
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
    id_user:{
        type:DataTypes.NUMBER,
        references:{
            model:User,
            key:'id'
        }
    },
    id_company:{
        type:DataTypes.NUMBER,
        references:{
            model:CompanyType,
            key:'id'
        }
    }
    
}, {tableName:'company', timestamps: false});

//Relación N-1: Company pertenece a un User
Company.belongsTo(User,{foreignKey:'id_user', targetKey: 'id'});
//Relación N-1: Company pertenece a un CompanyType
Company.belongsTo(CompanyType,{foreignKey:'id_company', targetKey: 'id'});

export{Company}