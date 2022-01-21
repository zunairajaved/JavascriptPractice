'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn( 'Posts', 'description', Sequelize.STRING );
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn( 'posts', 'description', Sequelize.STRING );
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
