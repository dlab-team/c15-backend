'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      email: "user@email.com",
      password: "password",
      firstName: "Some",
      lastName: "User",
      phone: "+56 9 12345678",
      createdAt: new Date(),
      updatedAt: new Date(),
      RoleId: 1
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
