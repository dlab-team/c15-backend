'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      { name: "usuario", description: "Solo acceso al perfil" },
      { name: "administrador", description: "Acceso completo al sistema" },
      { name: "invitado", description: "Acceso limitado como invitado" }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, { truncate: true, cascade: true });
  }
};
