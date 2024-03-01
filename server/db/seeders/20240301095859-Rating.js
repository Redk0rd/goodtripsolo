/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ratings', [
      {
        ratingValue: 5,
        likedId: 2,
        likerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ratingValue: 4,
        likedId: 1,
        likerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ratings', null, {});
  },
};
