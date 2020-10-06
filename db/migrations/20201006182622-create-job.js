'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {      
          model: 'Users',
          key: 'id'
        }
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      company_description: {
        type: Sequelize.TEXT
      },
      job_title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      job_description: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      pay_range: {
        type: Sequelize.INTEGER
      },
      application_url: {
        type: Sequelize.TEXT
      },
      date: {
        type: Sequelize.DATE
      },
      posted: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jobs');
  }
};