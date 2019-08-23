'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define('Quiz', {
    courseId: { type: DataTypes.INTEGER, references: { model: 'Course', key: 'id', as: 'courseId', }, allowNull: { args: false, msg: 'courseId cannot be empty' }, },
    userId: { type: DataTypes.INTEGER, references: { model: 'User', key: 'id', as: 'userId', }, allowNull: { args: false, msg: 'userId cannot be empty' },},
    score: { type: DataTypes.INTEGER, allowNull: { args: false, msg: 'Score cannot be empty'}, }
  }, {});
  Quiz.associate = function(models) {
    // associations can be defined here
  };
  return Quiz;
};