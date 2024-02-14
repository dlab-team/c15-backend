'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('pillar_message','id_pillar', { 
      
        type: Sequelize.DataTypes.INTEGER,
        references:{
          model:{
            tableName:'pillar'
          },
          key:'id'
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      
    });
     
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.removeColumn('pillar_message','id_pillar');
     
  }
};
