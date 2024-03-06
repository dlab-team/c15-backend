'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blog_posts', [
      { title: "Artículo 1", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", createdAt: new Date(2024, 1, 7), updatedAt: new Date(2024, 1, 7), user_id: 1 },
      { title: "Artículo 2", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", createdAt: new Date(2024, 1, 8), updatedAt: new Date(2024, 1, 7), user_id: 2 },
      { title: "Artículo 3", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", createdAt: new Date(2024, 1, 9), updatedAt: new Date(2024, 1, 7), user_id: 3 },
      { title: "Artículo 4", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", createdAt: new Date(2024, 1, 10), updatedAt: new Date(2024, 1, 7), user_id: 4 }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blog_posts', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};