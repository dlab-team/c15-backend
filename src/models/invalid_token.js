import { DataTypes } from "sequelize";

export default (database) => {
    const InvalidToken = database.define('Invalid_Token',{
        token:{
            type:DataTypes.STRING,
            allowNull: false
        }
    }, {tableName:'invalid_tokens'});
    return InvalidToken;
};
