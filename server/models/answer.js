'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    optionId: { type: DataTypes.INTEGER, references: { model: 'Option', key: 'id', as: 'optionId', }, allowNull: { args: false, msg: 'optionId cannot be Empty' },   unique:{args: true, msg:"optionId already exist"}},
    questionId: { type: DataTypes.INTEGER, references: { model: 'Question', key: 'id', as: 'questionId', }, allowNull: { args: false, msg: 'questionId cannot be Empty' },   unique:{args: true, msg:"questionId already exist"}}
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
  };
  return Answer;
};