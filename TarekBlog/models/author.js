'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    contactInfo: DataTypes.STRING
  }, {});
  author.associate = function(models) {
    // associations can be defined here
    models.author.hasMany(models.blog, {foreignKey: 'blogs_id'})
  };
  return author;
};