import { DataTypes } from "sequelize";

export default (database) => {
    const Diagnostic = database.define('Diagnostic', { }, {
        timestamps: true
    });
    return Diagnostic;
};

// Diagnostic.belongsToMany(Pillar, {
//     through: PillarDiagnostic,
//     foreignKey: 'fk_id_diagnostic'
// });
