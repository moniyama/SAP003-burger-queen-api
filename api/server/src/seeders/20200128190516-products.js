'use strict';

// usado para popular a tabela pelo comando npx sequelize db:seed:all

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Menus', [
        {
        item: 'Refrigerante 500mL',
        price: 7,
        type: 'bebidas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: 'Refrigerante 750mL',
        price: 10,
        type: 'bebidas',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Menus', null, {});
  }
};
