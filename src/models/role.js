import { DataTypes } from "sequelize";

export default (database) => {
    const Role = database.define('Role', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        }
    }, {tableName:'roles',timestamps:false});
    return Role;
};
