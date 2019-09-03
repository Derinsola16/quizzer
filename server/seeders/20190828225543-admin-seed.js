'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  up: (queryInterface, Sequelize) => {   
      return queryInterface.bulkInsert('Users', [{
        email: 'Peterjoe@gmail.com',
        role: 'EXAMINER',
        password: bcrypt.hashSync("Johnny", saltRounds),      
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
*/
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
