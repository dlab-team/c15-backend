import { DataTypes } from "sequelize";

export default (database) => {
    const Pillar = database.define('Pillar', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    return Pillar;
};

// Pillar.belongsToMany(Diagnostic, {
//     through: PillarDiagnostic,
//     foreignKey: 'fk_id_pillar',
//     sourceKey: 'id'
// });

// Pillar.hasMany(PillarMessage, { /* options */
//     foreignKey: 'fk_id_pillar',
//     sourceKey: 'id'
// });

// PillarMessage.belongsTo(Pillar, { /* options */
//     foreignKey: 'fk_id_pillar',
//     targetKey: 'id'
// });