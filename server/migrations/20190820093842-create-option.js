'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        unique: true,
        allowNull: false,
        type: Sequelize.TEXT
      },
      questionId: {
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
    return queryInterface.dropTable('Options');
  }
};