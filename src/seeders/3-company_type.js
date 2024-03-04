'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('company_types', [
      { type: "Microempresas", description: "Ingresos anuales desde 0 a 2.400 UF" },
      { type: "Pequeña Empresa", description: "Ingresos anuales desde 2.400 UF a 25.000 UF" },
      { type: "Mediana Empresa", description: "Ingresos anuales desde 25.000 UF a 100.000 UF" },
      { type: "Gran Empresa", description: "Ingresos anuales desde 100.000 UF  y más" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('company_types', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
