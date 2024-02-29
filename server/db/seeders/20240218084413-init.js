/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        category: 'Food',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Clothes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
