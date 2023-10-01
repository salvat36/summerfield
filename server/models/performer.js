'use strict';
const { Model } = require('sequelize');

//maybe we have cast + crew for production? then regular staff?

module.exports = (sequelize, DataTypes) => {
  class Performers extends Model {
    static associate(models) {
      this.belongsToMany(models.Production, {
        through: 'ProductionPerformers', 
        foreignKey: 'performerId', // Foreign key in the join table that links to Performers
        as: 'productions', // Alias for the Productions association
      });
    }
  }
  Performers.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      bio: DataTypes.TEXT,
      // Add other fields as needed
    },
    {
      sequelize,
      modelName: 'Performers',
    }
  );
  return Performers;
};
