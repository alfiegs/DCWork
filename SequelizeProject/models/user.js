'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    models.user.hasMany(models.task) //creates a userId inside Task table (creates a relationship between User and Task tables)
  };
  return user;
};

//this file defines table but doesn't create table
//have to edit migration file too