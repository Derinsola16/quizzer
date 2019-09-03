'use strict';
module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define('Option', {
    text: { type: DataTypes.TEXT, allowNull: { args: false, msg: 'Please enter question option' }, unique: { args: true, msg: 'Option already exists' } },
    questionId: { type: DataTypes.INTEGER, allowNull: { args: false, msg: 'Question cannot be empty' }, references: { model: 'Question', key: 'id', as: 'questionId', }, unique: { args: true, msg: 'questionId already exists' } }
  }, {});
  Option.associate = function(models) {
    // associations can be defined here
    Option.belongsTo(models.Question,{
      foreignKey: 'questionId'
    })
  };
  return Option;
};