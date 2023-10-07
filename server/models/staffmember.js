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
    }
  }, {});

  StaffMember.associate = (models) => {
    StaffMember.belongsTo(models.Production, {
      foreignKey: 'productionId',
      onDelete: 'SET NULL',
    });
  };

  return StaffMember;
};
