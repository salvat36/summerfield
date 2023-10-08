const { Production, StaffMember } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productions = await Promise.all([
      Production.create({
        title: 'Production 1',
        description: 'This is the first demo production',
      }),
      Production.create({
        title: 'Production 2',
        description: 'This is the second demo production',
      }),
    ]);

    for (const production of productions) {
      for (let i = 0; i < 2; i++) {
        const staffMemberData = {
          firstName: `Staff${i + 1}`,
          lastName: `Member${i + 1}`,
          role: `Role${i + 1}`,
          productionId: production.id,
        };
        await StaffMember.create(staffMemberData);
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await StaffMember.destroy({ where: {} });
    await Production.destroy({ where: {} });
  },
};
