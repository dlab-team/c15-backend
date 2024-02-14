'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role', [
      { id: 1, name: "usuario", description: "Solo acceso al perfil" },
      { id: 2, name: "administrador", description: "Acceso completo al sistema" },
      { id: 3, name: "invitado", description: "Acceso limitado como invitado" }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role', null, {});
  }
};
