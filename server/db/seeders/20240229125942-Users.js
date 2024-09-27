const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Иван Иванов',
          email: 'ivan@ivan',
          password: await bcrypt.hash('123', 10),
          about: 'предпочитаю отдых в горах серым будням в офисе',
          phone: '8-933-228-14-13',
          telegram: '@ivanTripov',
          isPro: false,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          pathImg: 'aa05891d3647b35ee578145bb3c135.jpg',
        },
        {
          name: 'Петр Овсяников',
          email: 'petr@petr',
          password: await bcrypt.hash('123', 10),
          about: ' Активный туризм, походы, исследование новых мест',
          phone: '8-955-322-11-54',
          telegram: '@petrUchK0',
          isPro: true,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          pathImg: '1-1.jpg',
        },
        {
          name: 'Никита Русланович Жук-Жуков',
          email: 'admin@admin',
          password: await bcrypt.hash('123', 10),
          about: 'Являюсь аминистратором, люблю дикую природу и запах гор!',
          phone: '8-942-800-23-23',
          telegram: '@adminGoodTrip',
          isPro: false,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          pathImg: 'valakasTrip.webp',
        },
        {
          name: 'Эдуард Смирнов',
          email: 'ed@ed',
          password: await bcrypt.hash('123', 10),
          about: 'Гастрономические туры с изучением национальной кухни, посещением местных рынков и мастер-классов по приготовлению блюд',
          phone: '8-999-999-99-99',
          telegram: '@eduatd0',
          isPro: false,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          pathImg: '17bba0e214a92aa6895322bb98d79444.jpg',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};