/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Иван Иванов',
          email: 'ivan@example.com',
          password: 'password1',
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
          email: 'petr@example.com',
          password: 'password2',
          about: 'Описание пользователя 2',
          phone: '987654321',
          telegram: '@petr',
          isPro: false,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Админ Админов',
          email: 'admin@admin',
          password: '123',
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
