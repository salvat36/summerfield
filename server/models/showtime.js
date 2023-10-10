'use strict';

module.exports = (sequelize, DataTypes) => {
  const Showtime = sequelize.define('Showtime', {
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE
    },
    location: {
        type: DataTypes.STRING
    },
    matinee: {
        type: DataTypes.BOOLEAN
    }
  }, {});

  Showtime.associate = (models) => {
    Showtime.belongsTo(models.Production, {
        foreignKey: 'productionId',
        onDelete: 'SET NULL',
      });
  };

  return Showtime;
};