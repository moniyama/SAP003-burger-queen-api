'use strict';

// usado para popular a tabela pelo comando npx sequelize db:seed:all

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [
        {
        item: 'Café americano',
        price: 5,
        type: 'café da manhã',
        is_additional: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: 'Hambúrguer simples',
        price: 10,
        type: 'hamburguer',
        is_additional: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: 'Batata frita',
        price: 5,
        type: 'acompanhamento',
        is_additional: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: 'Refrigerante 750mL',
        price: 10,
        type: 'bebida',
        is_additional: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: 'ovo',
        price: 1,
        type: 'adicional',
        is_additional: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
