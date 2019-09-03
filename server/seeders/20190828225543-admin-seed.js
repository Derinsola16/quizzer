'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {   
      return queryInterface.bulkInsert('Users', [{
        email: 'John David',
        role: 'EXAMINER',
        password: 'JohnDave',      
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
