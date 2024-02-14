'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pillar', [
      { id: 1, name: "Tributario" },
      { id: 2, name: "Planificación estratégica" },
      { id: 3, name: "KPI" },
      { id: 4, name: "Desarrollo de equipos" },
      { id: 5, name: "Ventas" },
      { id: 6, name: "MKT" }]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pillar', null, {});
  }
};
