'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    albumName: DataTypes.STRING,
    year: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};