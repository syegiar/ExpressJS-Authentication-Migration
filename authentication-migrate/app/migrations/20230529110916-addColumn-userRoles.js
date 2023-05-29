'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.addColumn('userRoles', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('userRoles', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.removeColumn('userRoles', 'createdAt');
    await queryInterface.removeColumn('userRoles', 'updatedAt');
  }
};
