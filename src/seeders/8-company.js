'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('companies', [
      { name: "Empresa a",  user_id: 1, company_type_id: 2 },
      { name: "Empresa B",  user_id: 2, company_type_id: 2 },
      { name: "Empresa C",  user_id: 4, company_type_id: 3 },
      { name: "Empresa D",  user_id: 5, company_type_id: 4 },
      { name: "Empresa E",  user_id: 6, company_type_id: 1 },
      { name: "Empresa F",  user_id: 7, company_type_id: 2 },
      { name: "Empresa G",  user_id: 8, company_type_id: 3 },
      { name: "Empresa H",  user_id: 9, company_type_id: 4 },
      { name: "Empresa I",  user_id: 10, company_type_id: 1 },
      { name: "Empresa J",  user_id: 11, company_type_id: 2 },
      { name: "Empresa K",  user_id: 12, company_type_id: 3 },
      { name: "Empresa L",  user_id: 13, company_type_id: 4 },
      { name: "Empresa M",  user_id: 14, company_type_id: 1 },
      { name: "Empresa N",  user_id: 15, company_type_id: 2 },
      { name: "Empresa O",  user_id: 16, company_type_id: 3 },
      { name: "Empresa P",  user_id: 17, company_type_id: 4 },
      { name: "Empresa Q",  user_id: 18, company_type_id: 1 },
      { name: "Empresa R",  user_id: 19, company_type_id: 2 },
      { name: "Empresa S",  user_id: 20, company_type_id: 3 }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, { truncate: true, cascade: true });
  }
};
