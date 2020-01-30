'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        is_cooked: false,
        is_delivered: false,
        clientName: 'Camila',
        tableNumber: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_cooked: false,
        is_delivered: false,
        clientName: 'Catarina',
        tableNumber: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_cooked: true,
        is_delivered: false,
        clientName: 'Elaine',
        tableNumber: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_cooked: true,
        is_delivered: false,
        clientName: 'Fabi',
        tableNumber: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_cooked: true,
        is_delivered: true,
        clientName: 'Thamires',
        tableNumber: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_cooked: true,
        is_delivered: true,
        clientName: 'Genny',
        tableNumber: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_cooked: true,
        is_delivered: true,
        clientName: 'Carol',
        tableNumber: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
