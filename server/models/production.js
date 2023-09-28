'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Production extends Model {
    static associate(models) {
      // Define associations here, if needed.
    }
  }
  Production.init(
    {
      title: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Production',
    }
  );
  return Production;
};
