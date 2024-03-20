'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blog_posts', [
      { title: "Mujeres Emprendedoras: Rompiendo Barreras, Creando Futuros", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", author: "Daniel Mancilla", createdAt: new Date(2024, 2, 7), updatedAt: new Date(2024, 1, 7), user_id: 1 },
      { title: "El Arte de Emprender: Estrategias para Triunfar en el Mercado", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", author: "Humberto Suazo", createdAt: new Date(2024, 2, 8), updatedAt: new Date(2024, 1, 7), user_id: 2 },
      { title: "Tu primer emprendimiento", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", author: "María Bernal", createdAt: new Date(2024, 1, 9), updatedAt: new Date(2024, 1, 7), user_id: 3 },
      { title: "De la idea al Negocio: El Camino del Emprendedor", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", author: "Javier Bustamante", createdAt: new Date(2024, 2, 20), updatedAt: new Date(2024, 1, 7), user_id: 4 },
      { title: "Jovenes emprendedores", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", author: "Sonia Villalobos", createdAt: new Date(2024, 1, 10), updatedAt: new Date(2024, 1, 30), user_id: 5 },
      { title: "Innovación: Un Futuro Prometedor", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.", image: "default_image.jpeg", author: "Javiera Toledo", createdAt: new Date(2024, 1, 10), updatedAt: new Date(2024, 1, 7), user_id: 6 }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blog_posts', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};