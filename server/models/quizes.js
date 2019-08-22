'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quizes = sequelize.define('Quizes', {
    courseId: { type: DataTypes.INTEGER, references: { model: 'Courses', key: 'id', as: 'courseId', }, },
    userId: { type: DataTypes.INTEGER, references: { model: 'Users', key: 'id', as: 'userId', }, },
    score: { type: DataTypes.INTEGER, allowNull: { args: false, msg: 'Score cannot be empty'}, }
  }, {});
  Quizes.associate = function(models) {
    // associations can be defined here
  };
  return Quizes;
};