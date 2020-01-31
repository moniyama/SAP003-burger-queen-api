'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItensOrder', [
      {
        productId: 2,
        orderId: 1,
        additionalId: 5,
        qtd: 2,
        option: "vegetariano",
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
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 3,
        orderId: 3,
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
