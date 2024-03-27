import { DataTypes } from 'sequelize';

export default (database)=>{
    const Pillar = database.define('Pillar',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {tableName:'pillars',timestamps: false});
return Pillar;
}

