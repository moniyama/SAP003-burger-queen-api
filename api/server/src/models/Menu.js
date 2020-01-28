'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    item: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    type:DataTypes.STRING,
    // is_breakfast: DataTypes.BOOLEAN,
    // has_additional: DataTypes.BOOLEAN,
    // has_optional: DataTypes.BOOLEAN,
    // additional: DataTypes.ENUM,
    // optional: DataTypes.ENUM,
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};