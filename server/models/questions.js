'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    description: { type: DataTypes.TEXT, allowNull: { args: false, msg: 'Please enter question description'}, },
    courseId: { type: DataTypes.INTEGER, references: { model: 'Courses', key: 'id', as: 'courseId', }, },
    optionId: { type: DataTypes.INTEGER, references: { model: 'Options', key: 'id', as: 'optionId', }, }
  }, {});
  Questions.associate = function(models) {
    // associations can be defined here
  };
  return Questions;
};