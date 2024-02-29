'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { first_name: "Elena", last_name: "Martínez", email: "elena@example.com", password: bcrypt.hashSync("password1", 12), phone: "123456789", createdAt: new Date(2024, 1, 7), updatedAt: new Date(2024, 1, 7), role_id: 1 },
      { first_name: "Juan", last_name: "García", email: "juan@example.com", password: bcrypt.hashSync("password2", 12), phone: "987654321", createdAt: new Date(2024, 1, 8), updatedAt: new Date(2024, 1, 8), role_id: 1 },
      { first_name: "Sofía", last_name: "López", email: "sofia@example.com", password: bcrypt.hashSync("password3", 12), phone: "555555555", createdAt: new Date(2024, 1, 9), updatedAt: new Date(2024, 1, 9), role_id: 2 },
      { first_name: "Alejandro", last_name: "Rodríguez", email: "alejandro@example.com", password: bcrypt.hashSync("password4", 12), phone: "777777777", createdAt: new Date(2024, 1, 10), updatedAt: new Date(2024, 1, 10), role_id: 1 },
      { first_name: "Valentina", last_name: "Fernández", email: "valentina@example.com", password: bcrypt.hashSync("password5", 12), phone: "333333333", createdAt: new Date(2024, 1, 11), updatedAt: new Date(2024, 1, 11), role_id: 1 },
      { first_name: "Diego", last_name: "González", email: "diego@example.com", password: bcrypt.hashSync("password6", 12), phone: "111111111", createdAt: new Date(2024, 1, 12), updatedAt: new Date(2024, 1, 12), role_id: 3 },
      { first_name: "Lucía", last_name: "Pérez", email: "lucia@example.com", password: bcrypt.hashSync("password7", 12), phone: "222222222", createdAt: new Date(2024, 1, 13), updatedAt: new Date(2024, 1, 13), role_id: 1 },
      { first_name: "Mateo", last_name: "Sánchez", email: "mateo@example.com", password: bcrypt.hashSync("password8", 12), phone: "666666666", createdAt: new Date(2024, 1, 14), updatedAt: new Date(2024, 1, 14), role_id: 1 },
      { first_name: "Camila", last_name: "Ramírez", email: "camila@example.com", password: bcrypt.hashSync("password9", 12), phone: "444444444", createdAt: new Date(2024, 1, 15), updatedAt: new Date(2024, 1, 15), role_id: 3 },
      { first_name: "Daniel", last_name: "Torres", email: "daniel@example.com", password: bcrypt.hashSync("password10", 12), phone: "999999999", createdAt: new Date(2024, 1, 16), updatedAt: new Date(2024, 1, 16), role_id: 1 },
      { first_name: "Isabella", last_name: "Díaz", email: "isabella@example.com", password: bcrypt.hashSync("password11", 12), phone: "888888888", createdAt: new Date(2024, 1, 17), updatedAt: new Date(2024, 1, 17), role_id: 3 },
      { first_name: "Lucas", last_name: "Suárez", email: "lucas@example.com", password: bcrypt.hashSync("password12", 12), phone: "777777777", createdAt: new Date(2024, 1, 18), updatedAt: new Date(2024, 1, 18), role_id: 1 },
      { first_name: "Valeria", last_name: "Jiménez", email: "valeria@example.com", password: bcrypt.hashSync("password13", 12), phone: "555555555", createdAt: new Date(2024, 1, 19), updatedAt: new Date(2024, 1, 19), role_id: 1 },
      { first_name: "Nicolás", last_name: "López", email: "nicolas@example.com", password: bcrypt.hashSync("password14", 12), phone: "333333333", createdAt: new Date(2024, 1, 20), updatedAt: new Date(2024, 1, 20), role_id: 3 },
      { first_name: "Emma", last_name: "Perez", email: "emma@example.com", password: bcrypt.hashSync("password15", 12), phone: "111111111", createdAt: new Date(2024, 1, 21), updatedAt: new Date(2024, 1, 21), role_id: 3 },
      { first_name: "Adrián", last_name: "Hernández", email: "adrian@example.com", password: bcrypt.hashSync("password16", 12), phone: "666666666", createdAt: new Date(2024, 1, 22), updatedAt: new Date(2024, 1, 22), role_id: 1 },
      { first_name: "María", last_name: "Gómez", email: "maria@example.com", password: bcrypt.hashSync("password17", 12), phone: "222222222", createdAt: new Date(2024, 1, 23), updatedAt: new Date(2024, 1, 23), role_id: 1 },
      { first_name: "Martín", last_name: "Martínez", email: "martin@example.com", password: bcrypt.hashSync("password18", 12), phone: "888888888", createdAt: new Date(2024, 1, 24), updatedAt: new Date(2024, 1, 24), role_id: 3 },
      { first_name: "Julieta", last_name: "Flores", email: "julieta@example.com", password: bcrypt.hashSync("password19", 12), phone: "999999999", createdAt: new Date(2024, 1, 25), updatedAt: new Date(2024, 1, 25), role_id: 3 },
      { first_name: "Gabriel", last_name: "Díaz", email: "gabriel@example.com", password: bcrypt.hashSync("password20", 12), phone: "444444444", createdAt: new Date(2024, 1, 26), updatedAt: new Date(2024, 1, 26), role_id: 1 }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
