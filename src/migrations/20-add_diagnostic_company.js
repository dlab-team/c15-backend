'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('diagnostic', 'id_comapny', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'company'
        },
        key: 'id'
      },
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('diagnostic', 'id_comapny');

  }
};
