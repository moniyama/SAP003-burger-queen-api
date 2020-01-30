'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    item: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    type: DataTypes.STRING,
  }, {});
  Products.associate = function(models) {
    // Products.belongsTo(models.Orders)
  };
  return Products;
};