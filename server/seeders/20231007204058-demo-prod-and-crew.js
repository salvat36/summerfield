const { Production, CrewMember, Showtime } = require('../models');

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
        const crewMemberData = {
          firstName: `Crew${i + 1}`,
          lastName: `Member${i + 1}`,
          role: `Role${i + 1}`,
          productionId: production.id,
        };
        await CrewMember.create(crewMemberData);

        const showtimeData = {
          startTime: `2023-11-01 07:00:00`,
          endTime: `2023-11-01 09:00:00`,
          location: `123 Cherry Street`,
          matinee: false,
          productionId: production.id,
        };
        await Showtime.create(showtimeData);
      }
    }

  },

  down: async (queryInterface, Sequelize) => {
    await CrewMember.destroy({ where: {} });
    await Production.destroy({ where: {} });
    await Showtime.destroy({ where: {} });
  },
};
