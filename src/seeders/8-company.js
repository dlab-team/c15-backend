'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('company', [
      { id: 1, name: "Empresa a",  id_user: 1, id_company_type: 2 },
      { id: 2, name: "Empresa B",  id_user: 2, id_company_type: 2 },
      { id: 3, name: "Empresa C",  id_user: 4, id_company_type: 3 },
      { id: 4, name: "Empresa D",  id_user: 5, id_company_type: 4 },
      { id: 5, name: "Empresa E",  id_user: 6, id_company_type: 1 },
      { id: 6, name: "Empresa F",  id_user: 7, id_company_type: 2 },
      { id: 7, name: "Empresa G",  id_user: 8, id_company_type: 3 },
      { id: 8, name: "Empresa H",  id_user: 9, id_company_type: 4 },
      { id: 9, name: "Empresa I",  id_user: 10, id_company_type: 1 },
      { id: 10, name: "Empresa J",  id_user: 11, id_company_type: 2 },
      { id: 12, name: "Empresa K",  id_user: 12, id_company_type: 3 },
      { id: 13, name: "Empresa L",  id_user: 13, id_company_type: 4 },
      { id: 14, name: "Empresa M",  id_user: 14, id_company_type: 1 },
      { id: 15, name: "Empresa N",  id_user: 15, id_company_type: 2 },
      { id: 16, name: "Empresa O",  id_user: 16, id_company_type: 3 },
      { id: 17, name: "Empresa P",  id_user: 17, id_company_type: 4 },
      { id: 18, name: "Empresa Q",  id_user: 18, id_company_type: 1 },
      { id: 19, name: "Empresa R",  id_user: 19, id_company_type: 2 },
      { id: 20, name: "Empresa S",  id_user: 20, id_company_type: 3 }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('company', null, {});

  }
};
