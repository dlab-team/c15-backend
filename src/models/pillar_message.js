import { DataTypes } from "sequelize";

export default (database) => {
    const PillarMessage = database.define('Pillar_message', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true
    });
    return PillarMessage;
};