module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'CategoryEquipments',
      [
        { name: 'Палатки', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Рюкзаки', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Спальные мешки', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Кемпинговая мебель', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Туристическая посуда', createdAt: new Date(), updatedAt: new Date() },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CategoryEquipments', null, {});
  },
};
