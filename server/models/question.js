'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    description: { type: DataTypes.TEXT, allowNull: { args: false, msg: 'Please enter question description' }, unique: { args: true, msg: 'Question already exists' } },
    courseId: { type: DataTypes.INTEGER, references: { model: 'Course', key: 'id', as: 'courseId', }, allowNull: { args: false, msg: 'courseId cannot be empty' }, unique: {args: true, msg: 'Course already exists'} },
    optionId: { type: DataTypes.INTEGER, references: { model: 'Option', key: 'id', as: 'optionId', }, allowNull: { args: false, msg: 'optionId cannot be empty' }, }
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};