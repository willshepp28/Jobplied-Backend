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
        onDelete: "CASCADE",
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
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      source: {
        allowNull: false,
        type: Sequelize.TEXT
      },   
      saved_for_later: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      employment_type: {
        allowNull: false,
        type: Sequelize.STRING
      },   
      remote: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      experience_level: {
        allowNull: false,
        type: Sequelize.STRING
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

