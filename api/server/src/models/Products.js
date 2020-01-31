'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    item: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    is_additional: DataTypes.BOOLEAN
  }, {});

  Products.associate = function(models) {
    Products.hasMany(models.ItensOrder)
  };
  return Products;
};