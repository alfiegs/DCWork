'use strict';
module.exports = (sequelize, DataTypes) => {
  const ideas = sequelize.define('ideas', {
    ideaName: DataTypes.STRING,
    description: DataTypes.STRING,
    contributors: DataTypes.STRING,
    imgURL: DataTypes.STRING
  }, {});
  ideas.associate = function(models) {
    // associations can be defined here
  };
  return ideas;
};