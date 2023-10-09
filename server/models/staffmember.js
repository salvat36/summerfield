'use strict';

module.exports = (sequelize, DataTypes) => {
    const StaffMember = sequelize.define('StaffMember', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING,
    },
    headshot: {
        type: DataTypes.STRING,
    }
    }, {});
    
    return StaffMember;
};
