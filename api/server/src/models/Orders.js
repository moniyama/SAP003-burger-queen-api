'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    is_cooked: DataTypes.BOOLEAN,
    is_delivered: DataTypes.BOOLEAN,
    clientName: DataTypes.STRING,
    tableNumber: DataTypes.INTEGER,
  }, {});
  Orders.associate = function(models) {
    Orders.hasMany(models.ItensOrder)
  };
  return Orders;
};