'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    item: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    options: DataTypes.BOOLEAN,
    additional: DataTypes.BOOLEAN
  }, {});

  return Products;
};