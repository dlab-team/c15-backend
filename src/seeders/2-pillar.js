'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pillars', [
      { name: "Tributario" },
      { name: "Planificación estratégica" },
      { name: "KPI" },
      { name: "Desarrollo de equipos" },
      { name: "Ventas" },
      { name: "MKT" }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pillars', null, { truncate: true, cascade: true });
  }
};
