import { DataTypes } from "sequelize";

export default (database) => {
    const PillarDiagnostic = database.define('Pillar_diagnostic', {
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true
    });
    return PillarDiagnostic;
};