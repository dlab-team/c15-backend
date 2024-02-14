'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('company_type', [
      {id:1, type: "Microempresas", description: "Ingresos anuales desde 0 a 2.400 UF" },
      {id:2, type: "Pequeña Empresa", description: "Ingresos anuales desde 2.400 UF a 25.000 UF" },
      {id:3, type: "Mediana Empresa", description: "Ingresos anuales desde 25.000 UF a 100.000 UF" },
      {id:4, type: "Gran Empresa", description: "Ingresos anuales desde 100.000 UF  y más" },
    ]);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('company_type', null, {});

  }
};
 