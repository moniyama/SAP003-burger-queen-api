'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      type: {
        type: Sequelize.STRING
      },
      // is_breakfast: {
      //   type: Sequelize.BOOLEAN
      // },
      // has_additional: {
      //   type: Sequelize.BOOLEAN
      // },
      // has_optional: {
      //   type: Sequelize.BOOLEAN
      // },
      // additional: {
      //   type: Sequelize.ENUM
      // },
      // optional: {
      //   type: Sequelize.ENUM
      // },
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
    return queryInterface.dropTable('Menus');
  }
};