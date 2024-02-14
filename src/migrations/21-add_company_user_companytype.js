'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('company', 'id_company_type', {

      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'company_type'
        },
        key: 'id'
      },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'

    });
    await queryInterface.addColumn('company', 'id_user', {

      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'user'
        },
        key: 'id'
      },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'

    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('company', 'id_company_type');
    await queryInterface.removeColumn('company', 'id_user');

  }
};
