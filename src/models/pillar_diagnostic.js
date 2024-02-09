import {DataTypes} from 'sequelize';
import Diagnostic from './diagnostic.js';
import Pillar from './pillar.js';

export default (database)=>{
    const PillarDiagnostic = database.define('pilar_diagnostic',{

        score:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    }, {timestamps: false});

return PillarDiagnostic;
}
