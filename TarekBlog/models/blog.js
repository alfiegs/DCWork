'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define('blog', {
    title: DataTypes.STRING,
    abstract: DataTypes.STRING,
    body: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN,
    publishDate: DataTypes.DATE,
    imgURL: DataTypes.STRING
  }, {});
  blog.associate = function(models) {
    // associations can be defined here
    models.blog.belongsTo(models.categories, {foreignKey: 'categories_id'})
    models.blog.belongsTo(models.author, {foreignKey: 'authors_id'})
    models.blog.hasMany(models.comments, {foreignKey: 'comments_id'})
  };
  return blog;
};