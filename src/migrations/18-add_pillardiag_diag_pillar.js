'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('pillar_diagnostic','id_diagnostic',{
     
        type: Sequelize.DataTypes.INTEGER,
        references:{
          model:{
            tableName:'diagnostic'
          },
          key:'id'
        },
        allowNull:false,
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      });
      await queryInterface.addColumn('pillar_diagnostic','id_pillar',{
     
        type: Sequelize.DataTypes.INTEGER,
        references:{
          model:{
            tableName:'pillar'
          },
          key:'id'
        },
        allowNull:false,
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('pillar_diagnostic','id_diagnostic');
     await queryInterface.removeColumn('pillar_diagnostic','id_pillar');
  }
};
