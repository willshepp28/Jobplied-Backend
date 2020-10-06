'use strict';
const createUser = require("../../helpers/seed/user.seeder");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
     * 
     * 
     *       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    */

    return await queryInterface.bulkInsert("Users", [
      createUser("Will, Smith"),
      createUser("Bob", "Dole"),
      createUser("Sarah", "Johnson")
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
