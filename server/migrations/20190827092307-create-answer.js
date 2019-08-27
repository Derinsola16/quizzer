'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      optionId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'Options', key: 'id', as: 'optionId', }
      },
      questionId: {
        allowNull:false,
        unique: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'Questions', key: 'id', as: 'questionId', }
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
    return queryInterface.dropTable('Answers');
  }
};