'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('userRoles', { 
        userId: {
          type: Sequelize.STRING,
          references: {
            model: 'users',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        roleId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'roles',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('users');
  }
};
