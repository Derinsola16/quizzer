'use strict';
module.exports = (sequelize, DataTypes) => {
  const Options = sequelize.define('Options', {
    text: DataTypes.STRING,
    questionId: DataTypes.INTEGER
  }, {});
  Options.associate = function(models) {
    // associations can be defined here
  };
  return Options;
};