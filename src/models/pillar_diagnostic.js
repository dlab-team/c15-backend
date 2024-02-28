import { DataTypes } from 'sequelize';

export default (database)=>{
    const PillarDiagnostic = database.define('Pillar_diagnostic',{
        score:{
            type:DataTypes.DOUBLE,
            allowNull:false
        }
    }, {tableName:'pillar_diagnostics',timestamps: false});
return PillarDiagnostic;
}
