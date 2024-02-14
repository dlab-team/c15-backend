import {DataTypes} from 'sequelize';

export default (database)=>{
    const Pillar = database.define('pillar',{
        
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    
    }, {timestamps: false});

return Pillar;
}
