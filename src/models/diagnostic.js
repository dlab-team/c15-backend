import {DataTypes} from 'sequelize';
import Company from './company.js';

export default (database)=>{
    const Diagnostic = database.define('diagnostic',{
  
    });

    return Diagnostic;
}