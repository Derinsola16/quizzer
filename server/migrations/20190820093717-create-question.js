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
        unique: true,
        allowNull: false,
        type: Sequelize.Text
      },
      courseId: {
        unique: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'Courses', key: 'id', as: 'courseId', }
      },
      optionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'Options', key: 'id', as: 'optionId', }
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