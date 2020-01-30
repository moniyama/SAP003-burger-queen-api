'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_cooked: {
        type: Sequelize.BOOLEAN
      },
      is_delivered: {
        type: Sequelize.BOOLEAN
      },
      clientName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tableNumber: {
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};