'use strict';
module.exports = (sequelize, DataTypes) => {
  const test2 = sequelize.define('test2', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    contactInfo: DataTypes.STRING
  }, {});
  test2.associate = function(models) {
    // associations can be defined here
  };
  return test2;
};