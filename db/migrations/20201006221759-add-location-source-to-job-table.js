'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      return Promise.all([
          queryInterface.addColumn("Jobs", "city", {type: Sequelize.STRING}),
          queryInterface.addColumn("Jobs", "state", { type: Sequelize.STRING}),
          queryInterface.addColumn("Jobs", "source", { type: Sequelize.TEXT }),
          queryInterface.addColumn("Jobs", "saved_for_later", { type: Sequelize.BOOLEAN, defaultValue: false }),
          queryInterface.addColumn("Jobs", "employment_type", { type: Sequelize.STRING}),
          queryInterface.addColumn("Jobs", "remote", { type: Sequelize.BOOLEAN, defaultValue: false }),
          queryInterface.addColumn("Jobs", "experience_level", {type: Sequelize.STRING})
      ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn("Jobs", "city"),
      queryInterface.removeColumn("Jobs", "state"),
      queryInterface.removeColumn("Jobs", "source"),
      queryInterface.removeColumn("Jobs", "saved_for_later"),
      queryInterface.removeColumn("Jobs", "employment_type"),
      queryInterface.removeColumn("Jobs", "remote"),
      queryInterface.addColumn("Jobs", "experience_level")

    ])
  }
};
