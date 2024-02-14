'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('user','id_role',{ 
        type: Sequelize.DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:'role'
          },
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('user','id_role');
  }
};
