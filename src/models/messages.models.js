const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Message = db.define("message", {
    id: {
    type: DataTypes.UUID,
    primaryKey: true,
    autoIncrement: true,
    },
    content: {
    type: DataTypes.TEXT,
    allowNull: false,
    },
    participantsId: {
    type: DataTypes.UUID,
    allowNull: false,
    },
    createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "sent",
    },
});

module.exports = Message;