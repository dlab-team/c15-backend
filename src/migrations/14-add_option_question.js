'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('option','id_question',{
        type: Sequelize.DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"question"
          },
          key:"id"
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
  });
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('option','id_question'); 
  }
};
