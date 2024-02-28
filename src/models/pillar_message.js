import { DataTypes } from 'sequelize';

export default (database)=>{
    const PillarMesssage = database.define('Pillar_message',{
        score_limit:{
            type:DataTypes.DOUBLE,
            allowNull:false
        },
        message:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    }, {tableName:'pillar_messages',timestamps: false});
return PillarMesssage;
}
