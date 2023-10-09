'use strict';

module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    expirationDate: {
        type: DataTypes.DATE
    }
  }, {});

  return Feature;
};