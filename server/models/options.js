'use strict';
module.exports = (sequelize, DataTypes) => {
  const Options = sequelize.define('Options', {
    text: { type: DataTypes.TEXT, allowNull: { args: false, msg: 'Please enter question option' }, },
    questionId: { type: DataTypes.INTEGER, references: { model: 'Questions', key: 'id', as: 'questionId', }, }
  }, {});
  Options.associate = function(models) {
    // associations can be defined here
  };
  return Options;
};