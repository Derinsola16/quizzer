'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: { type: DataTypes.STRING, allowNull: { args: false, msg: 'Please enter your email address' }, unique: { args: true, msg: 'Email already exists' }, validate: { isEmail: { args: true, msg: 'Please enter a valid email address' }, }, },
    role: { type: DataTypes.ENUM, allowNull: { args: false, msg: 'Role cannot be empty'}, },
    password: { type: DataTypes.STRING, allowNull: {args: false, msg: 'Please enter a password' }, validate: { isNotShort: (value) => {if (value.length < 8) {throw new Error('Password should be at least 8 characters long'); } }, }, }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};