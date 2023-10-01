'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const AdminUser = sequelize.define('AdminUser', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure usernames are unique
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('owner', 'admin'),
        allowNull: false,
      defaultValue: 'admin', // Set the default type if needed
    },
    });

    return AdminUser;
};
