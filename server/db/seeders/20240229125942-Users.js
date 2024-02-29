const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Иван Иванов',
          email: 'w@w',
          password: await bcrypt.hash('w', 10),
          about: 'Описание пользователя 1',
          phone: '123456789',
          telegram: '@ivan',
          isPro: false,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Петр Петров',
          email: 'q@q',
          password: await bcrypt.hash('q', 10),
          about: 'Описание пользователя 2',
          phone: '987654321',
          telegram: '@petr',
          isPro: true,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Админ Админов',
          email: 'admin@admin',
          password: await bcrypt.hash('admin', 10),
          about: 'Описание администратора',
          phone: '555555555',
          telegram: '@admin',
          isPro: false,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
