'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Production = sequelize.define('Production', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    ticketURL: {
      type: DataTypes.CHAR,
      allowNull: true, // Modify this based on your needs
    },
    flyer_img:{
      type: DataTypes.CHAR,
      allowNull: true,
      unique: true,
    },
    images:{
      type: DataTypes.ARRAY(DataTypes.CHAR),
      allowNull: true,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM('active', 'archived'),
      allowNull: false, // Modify this based on your needs
      defaultValue: 'active', // Set the default status if needed
    },
  });

  Production.associate = (models) => {
    // Define associations here
    Production.belongsToMany(models.Performer, {
      through: 'ProductionPerformers', // A join table to store the associations
      foreignKey: 'productionId', // Foreign key in the join table that links to Production
      as: 'performers', // Alias for the Performers association
    });
  };

  return Production;
};
