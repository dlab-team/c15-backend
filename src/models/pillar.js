import { DataTypes } from 'sequelize';

export default (database)=>{
    const Pillar = database.define('Pillar',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }, {tableName:'pillars',timestamps: false});
return Pillar;
}
