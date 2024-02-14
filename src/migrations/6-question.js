'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('question', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      question: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },

    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('question');
  }
};
