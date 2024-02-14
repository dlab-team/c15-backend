'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('blog_post', 'id_user',{
        type: Sequelize.DataTypes.INTEGER,
        references:{
          model:{
            tableName:'user'
          },
          key:'id'
        },
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      
      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('blog_post', 'id_user');
     
  }
};
