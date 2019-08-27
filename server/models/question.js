'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    description: { type: DataTypes.STRING, allowNull: { args: false, msg: 'Please enter question description' }, unique: { args: true, msg: 'Question already exists' } },
    courseId: { type: DataTypes.INTEGER, references: { model: 'Course', key: 'id', as: 'courseId', }, allowNull: { args: false, msg: 'courseId cannot be empty' }, unique: {args: true, msg: 'Course already exists'} },
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};