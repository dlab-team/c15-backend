'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('answer', 'id_diagnostic',{ 
        type: Sequelize.DataTypes.INTEGER,
        references:{
          model:{
            tableName:'diagnostic',
          },
          key:'id'
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
     });
     await queryInterface.addColumn('answer', 'id_option',{ 
      type: Sequelize.DataTypes.INTEGER,
      references:{
        model:{
          tableName:'option'
        },
        key:'id'
      },
      allowNull:false,
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
   });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('answer', 'id_diagnostic');
     await queryInterface.removeColumn('answer', 'id_option');
  }
};
