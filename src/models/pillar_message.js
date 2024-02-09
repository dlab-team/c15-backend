import {DataTypes} from 'sequelize';
import Pillar from './pillar.js';

export default (database)=>{
    const PillarMesssage = database.define('pillar_message',{

        score_limit:{
            type:DataTypes.DOUBLE,
            allowNull:false
        },
        message:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    }, {timestamps: false});

return PillarMesssage;
}
