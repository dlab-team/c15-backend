'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pillar_message', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      score_limit: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false
      },
      message: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pillar_message');

  }
};
