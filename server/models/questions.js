'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    description: DataTypes.STRING,
    subjectId: DataTypes.INTEGER,
    optionId: DataTypes.INTEGER
  }, {});
  Questions.associate = function(models) {
    // associations can be defined here
  };
  return Questions;
};