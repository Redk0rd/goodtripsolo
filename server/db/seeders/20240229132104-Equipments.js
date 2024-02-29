module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Equipment',
      [
        {
          name: 'Палатка для 2-х человек',
          price: 100,
          description: 'Компактная палатка для двух человек',
          userId: 1,
          catEId: 1,
          pathImg: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Туристический рюкзак',
          price: 50,
          description: 'Удобный рюкзак для походов',
          userId: 2,
          catEId: 2,
          pathImg: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Спальный мешок',
          price: 30,
          description: 'Теплый спальный мешок для ночных походов',
          userId: 3,
          catEId: 3,
          pathImg: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Equipment', null, {});
  },
};
