'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Courses', [{
        name: 'Javascript',
        createdAt: new Date(),
        updatedAt: new Date(),
 
        // name: ('English','Php'),
        // createdAt: new Date(),
        // updatedAt: new Date(),
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkDelete('Courses', null, {});
    
  }
};
