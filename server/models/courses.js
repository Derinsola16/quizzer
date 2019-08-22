'use strict';
module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define('Courses', {
    name: { type: DataTypes.STRING, allowNull: { args: false, msg: 'Course cannot be Empty'}, }
  }, {});
  Courses.associate = function(models) {
    // associations can be defined here
  };
  return Courses;
};