'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItensOrder = sequelize.define('ItensOrder', {
    option: DataTypes.STRING,
    qtd: DataTypes.INTEGER
  }, {});
  ItensOrder.associate = function(models) {
    ItensOrder.belongsTo(models.Products)
    ItensOrder.hasMany(models.Orders)
    };
  return ItensOrder;
};