import {DataTypes} from 'sequelize';

export default (database)=>{
    const PillarDiagnostic = database.define('Pillar_diagnostic',{
        score:{
            type:DataTypes.DOUBLE,
            allowNull:false
        }
    }, {tableName:'pillar_diagnostic',timestamps: false});

return PillarDiagnostic;
}
