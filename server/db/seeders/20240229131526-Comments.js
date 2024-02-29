module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          title: 'Отличный тур!',
          userId: 1,
          tourId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Спасибо за отличное путешествие!',
          userId: 2,
          tourId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Прекрасный отдых, рекомендую!',
          userId: 3,
          tourId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
