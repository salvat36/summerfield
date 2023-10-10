const { Feature } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      Feature.create({
        title: 'Feature 1',
        description: 'Did you know this acting tip?',
        category: 'Acting tip',
        expirationDate: '2023-12-30', 
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await Feature.destroy({ where: {} });
  },
};
