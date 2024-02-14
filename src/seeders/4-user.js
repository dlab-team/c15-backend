'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      { id: 1, name: "Elena", last_name: "Martínez", email: "elena@example.com", password: "password1", phone: "123456789", createdAt: new Date(2024, 1, 7), updatedAt: new Date(2024, 1, 7), id_role: 1 },
      { id: 2, name: "Juan", last_name: "García", email: "juan@example.com", password: "password2", phone: "987654321", createdAt: new Date(2024, 1, 8), updatedAt: new Date(2024, 1, 8), id_role: 1 },
      { id: 3, name: "Sofía", last_name: "López", email: "sofia@example.com", password: "password3", phone: "555555555", createdAt: new Date(2024, 1, 9), updatedAt: new Date(2024, 1, 9), id_role: 2 },
      { id: 4, name: "Alejandro", last_name: "Rodríguez", email: "alejandro@example.com", password: "password4", phone: "777777777", createdAt: new Date(2024, 1, 10), updatedAt: new Date(2024, 1, 10), id_role: 1 },
      { id: 5, name: "Valentina", last_name: "Fernández", email: "valentina@example.com", password: "password5", phone: "333333333", createdAt: new Date(2024, 1, 11), updatedAt: new Date(2024, 1, 11), id_role: 1 },
      { id: 6, name: "Diego", last_name: "González", email: "diego@example.com", password: "password6", phone: "111111111", createdAt: new Date(2024, 1, 12), updatedAt: new Date(2024, 1, 12), id_role: 3 },
      { id: 7, name: "Lucía", last_name: "Pérez", email: "lucia@example.com", password: "password7", phone: "222222222", createdAt: new Date(2024, 1, 13), updatedAt: new Date(2024, 1, 13), id_role: 1 },
      { id: 8, name: "Mateo", last_name: "Sánchez", email: "mateo@example.com", password: "password8", phone: "666666666", createdAt: new Date(2024, 1, 14), updatedAt: new Date(2024, 1, 14), id_role: 1 },
      { id: 9, name: "Camila", last_name: "Ramírez", email: "camila@example.com", password: "password9", phone: "444444444", createdAt: new Date(2024, 1, 15), updatedAt: new Date(2024, 1, 15), id_role: 3 },
      { id: 10, name: "Daniel", last_name: "Torres", email: "daniel@example.com", password: "password10", phone: "999999999", createdAt: new Date(2024, 1, 16), updatedAt: new Date(2024, 1, 16), id_role: 1 },
      { id: 11, name: "Isabella", last_name: "Díaz", email: "isabella@example.com", password: "password11", phone: "888888888", createdAt: new Date(2024, 1, 17), updatedAt: new Date(2024, 1, 17), id_role: 3 },
      { id: 12, name: "Lucas", last_name: "Suárez", email: "lucas@example.com", password: "password12", phone: "777777777", createdAt: new Date(2024, 1, 18), updatedAt: new Date(2024, 1, 18), id_role: 1 },
      { id: 13, name: "Valeria", last_name: "Jiménez", email: "valeria@example.com", password: "password13", phone: "555555555", createdAt: new Date(2024, 1, 19), updatedAt: new Date(2024, 1, 19), id_role: 1 },
      { id: 14, name: "Nicolás", last_name: "López", email: "nicolas@example.com", password: "password14", phone: "333333333", createdAt: new Date(2024, 1, 20), updatedAt: new Date(2024, 1, 20), id_role: 3 },
      { id: 15, name: "Emma", last_name: "Perez", email: "emma@example.com", password: "password15", phone: "111111111", createdAt: new Date(2024, 1, 21), updatedAt: new Date(2024, 1, 21), id_role: 3 },
      { id: 16, name: "Adrián", last_name: "Hernández", email: "adrian@example.com", password: "password16", phone: "666666666", createdAt: new Date(2024, 1, 22), updatedAt: new Date(2024, 1, 22), id_role: 1 },
      { id: 17, name: "María", last_name: "Gómez", email: "maria@example.com", password: "password17", phone: "222222222", createdAt: new Date(2024, 1, 23), updatedAt: new Date(2024, 1, 23), id_role: 1 },
      { id: 18, name: "Martín", last_name: "Martínez", email: "martin@example.com", password: "password18", phone: "888888888", createdAt: new Date(2024, 1, 24), updatedAt: new Date(2024, 1, 24), id_role: 3 },
      { id: 19, name: "Julieta", last_name: "Flores", email: "julieta@example.com", password: "password19", phone: "999999999", createdAt: new Date(2024, 1, 25), updatedAt: new Date(2024, 1, 25), id_role: 3 },
      { id: 20, name: "Gabriel", last_name: "Díaz", email: "gabriel@example.com", password: "password20", phone: "444444444", createdAt: new Date(2024, 1, 26), updatedAt: new Date(2024, 1, 26), id_role: 1 }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
