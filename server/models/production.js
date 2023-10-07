'use strict';

module.exports = (sequelize, DataTypes) => {
  const Production = sequelize.define('Production', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  }, {});

  Production.associate = (models) => {
    Production.hasMany(models.StaffMember, {
      foreignKey: 'productionId',
    });
  };

  return Production;
};