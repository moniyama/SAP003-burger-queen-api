'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItensOrder', [
      {
        productId: 2,
        orderId: 1,
        additionalId: 5,
        qtd: 1,
        option: "vegetariano",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        orderId: 1,
        additionalId: 5,
        qtd: 1,
        option: "bovino",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        orderId: 3,
        additionalId: 5,
        qtd: 1,
        option: "frango",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 4,
        orderId: 1,
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        orderId: 2,
        qtd: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 3,
        orderId: 4,
        qtd: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 3,
        orderId: 5,
        qtd: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 4,
        orderId: 6,
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 4,
        orderId: 7,
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 3,
        orderId: 7,
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItensOrder', null, {});
  }
};
