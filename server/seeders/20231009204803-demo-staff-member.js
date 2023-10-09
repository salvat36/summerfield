const { StaffMember } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      StaffMember.create({
        firstName: `Jane`,
        lastName: `Doe`,
        role: `Board Member`,
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await StaffMember.destroy({ where: {} });
  },
};