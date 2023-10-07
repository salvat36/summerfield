const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      User.create({
        username:'janedoe',
        accessLevel: 'admin',
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await User.destroy({ where: {} });
  },
};
