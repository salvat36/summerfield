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

  return Production;
};