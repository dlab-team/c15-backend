'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('companies', [
      { name: "Empresa A", createdAt: new Date(), updatedAt: new Date(), user_id: 1, company_type_id: 2 },
      { name: "Empresa B", createdAt: new Date(), updatedAt: new Date(), user_id: 2, company_type_id: 2 },
      { name: "Empresa C", createdAt: new Date(), updatedAt: new Date(), user_id: 4, company_type_id: 3 },
      { name: "Empresa D", createdAt: new Date(), updatedAt: new Date(), user_id: 5, company_type_id: 4 },
      { name: "Empresa E", createdAt: new Date(), updatedAt: new Date(), user_id: 6, company_type_id: 1 },
      { name: "Empresa F", createdAt: new Date(), updatedAt: new Date(), user_id: 7, company_type_id: 2 },
      { name: "Empresa G", createdAt: new Date(), updatedAt: new Date(), user_id: 8, company_type_id: 3 },
      { name: "Empresa H", createdAt: new Date(), updatedAt: new Date(), user_id: 9, company_type_id: 4 },
      { name: "Empresa I", createdAt: new Date(), updatedAt: new Date(), user_id: 10, company_type_id: 1 },
      { name: "Empresa J", createdAt: new Date(), updatedAt: new Date(), user_id: 11, company_type_id: 2 },
      { name: "Empresa K", createdAt: new Date(), updatedAt: new Date(), user_id: 12, company_type_id: 3 },
      { name: "Empresa L", createdAt: new Date(), updatedAt: new Date(), user_id: 13, company_type_id: 4 },
      { name: "Empresa M", createdAt: new Date(), updatedAt: new Date(), user_id: 14, company_type_id: 1 },
      { name: "Empresa N", createdAt: new Date(), updatedAt: new Date(), user_id: 15, company_type_id: 2 },
      { name: "Empresa O", createdAt: new Date(), updatedAt: new Date(), user_id: 16, company_type_id: 3 },
      { name: "Empresa P", createdAt: new Date(), updatedAt: new Date(), user_id: 17, company_type_id: 4 },
      { name: "Empresa Q", createdAt: new Date(), updatedAt: new Date(), user_id: 18, company_type_id: 1 },
      { name: "Empresa R", createdAt: new Date(), updatedAt: new Date(), user_id: 19, company_type_id: 2 },
      { name: "Empresa S", createdAt: new Date(), updatedAt: new Date(), user_id: 20, company_type_id: 3 }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
