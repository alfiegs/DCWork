'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    title: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    // adds a foreign key reference called categoriesId
    models.categories.hasMany(models.dishes)
  };
  return categories;
};