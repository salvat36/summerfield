'use strict';

module.exports = (sequelize, DataTypes) => {
  const Production = sequelize.define('Production', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    flyer: {
      type: DataTypes.STRING
    },
    images: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    ticketLink: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT
    },
  }, {});

  Production.associate = (models) => {
    Production.hasMany(models.CrewMember, {
      foreignKey: 'productionId',
    });
    Production.hasMany(models.Showtime, {
      foreignKey: 'productionId',
    })
  };

  return Production;
};