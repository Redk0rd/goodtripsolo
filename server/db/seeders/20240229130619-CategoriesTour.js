/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'CategoryTours',
      [
        { name: 'Пеший поход', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Сплав', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Джип-тур', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Каяк-тур', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Альпинизм', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Другое', createdAt: new Date(), updatedAt: new Date() },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CategoryTours', null, {});
  },
};
