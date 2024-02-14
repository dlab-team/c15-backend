'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('question','id_pillar', {
     
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
     await queryInterface.removeColumn('question','id_pillar')
     
  }
};
