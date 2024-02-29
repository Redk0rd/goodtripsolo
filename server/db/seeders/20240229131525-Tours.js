module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Tours',
      [
        {
          name: 'Путешествие на море',
          price: 500,
          description: 'Замечательное путешествие на море',
          authorId: 1,
          catTId: 1,
          location: 'Морской курорт',
          date: '2024-07-15',
          endDate: '2024-07-30',
          places: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Горные вершины',
          price: 700,
          description: 'Увлекательное восхождение на горные вершины',
          authorId: 2,
          catTId: 2,
          location: 'Горы',
          date: '2024-08-10',
          endDate: '2024-08-20',
          places: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Экскурсия по достопримечательностям',
          price: 300,
          description: 'Увлекательное знакомство с историей и культурой',
          authorId: 3,
          catTId: 3,
          location: 'Различные города',
          date: '2024-09-05',
          endDate: '2024-09-15',
          places: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tours', null, {});
  },
};
