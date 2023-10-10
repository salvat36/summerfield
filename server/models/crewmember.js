'use strict';

module.exports = (sequelize, DataTypes) => {
    const CrewMember = sequelize.define('CrewMember', {
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

    CrewMember.associate = (models) => {
        CrewMember.belongsTo(models.Production, {
            foreignKey: 'productionId',
            onDelete: 'SET NULL',
        });
    };

    return CrewMember;
};
