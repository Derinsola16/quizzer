'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: { type: DataTypes.STRING, allowNull: { args: false, msg: 'Please enter your email address' }, unique: { args: true, msg: 'Email already exists' }, },
    role: { type: DataTypes.ENUM('EXAMINER','CANDIDATE'), allowNull: { args: false, msg: 'Role cannot be empty'}, },
    password: { type: DataTypes.STRING, allowNull: {args: false, msg: 'Please enter a password' }, }
  }, {});
  
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};