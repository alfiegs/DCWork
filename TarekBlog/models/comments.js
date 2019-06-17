'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    title: DataTypes.STRING,
    msg: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
    models.comments.belongsTo(models.blog, {foreignKey: 'blogs_id'})
  };
  return comments;
};