'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        unique: 'questionCompositeIndex',
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      courseId: {
        unique: 'questionCompositeIndex',
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'Courses', key: 'id', as: 'courseId', }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};