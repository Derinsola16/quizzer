'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quizes = sequelize.define('Quizes', {
    subjectId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  Quizes.associate = function(models) {
    // associations can be defined here
  };
  return Quizes;
};