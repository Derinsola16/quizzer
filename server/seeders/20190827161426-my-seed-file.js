'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Courses', [{
        name: 'Javascript',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
        {
          name: 'Node',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Vue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bootstrap',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Php',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Python',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'English',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'General',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Html',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Css',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ],{});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkDelete('Courses', null, {});
    
  }
};
