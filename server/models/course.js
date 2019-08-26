'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: { type: DataTypes.STRING, allowNull: { args: false, msg: 'Course cannot be Empty' }, unique: { args: true, msg: 'Course already exists' }, }
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};