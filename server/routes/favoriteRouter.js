const favouriteRouter = require('express').Router();
const { User, Tour, Favorite } = require('../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
// const verifyRefreshToken = require('../middlewares/verifyRefreshToken');

// favouriteRouter.get('/', verifyAccessToken, async (req, res) => {
//   try {
//     const { id } = res.locals.user;

//     const favorite = await User.findOne({
//       where: { id },
//       attributes: {
//         exclude: ['password', 'isAdmin'],
//       },
//       include: {
//         model: Tour,
//         as: 'favorites',
//       },
//     });
//     console.log(JSON.stringify(favorite.favorites, null, 2));
//     res.json(favorite.favorites);
//   } catch (error) {
//     console.log(error);
//   }
// });

favouriteRouter.get('/', verifyAccessToken, async (req, res) => {
  try {
    const allFavorites = await Favorite.findAll({
      where: { userId: res.locals.user.id }, // Указываем условие поиска по userId
      include: [{ model: Tour }], // Указываем модель Tour для включения связанных данных
    });
    res.json(allFavorites);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

favouriteRouter.post('/:id', verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const { id } = req.params;
    console.log(userId, id);
    if (Number.isNaN(+id)) return res.sendStatus(400);

    const [favorite, created] = await Favorite.findOrCreate({
      where: {
        userId,
        tourId: id,
      },
    });

    if (created) {
      const favoriteWithTour = await Favorite.findByPk(favorite.id, {
        include: [{ model: Tour }],
      });
      res.json(favoriteWithTour);
    } else {
      res.json({ message: 'Тур уже находится в избранном' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Что-то пошло не так' });
  }
});

favouriteRouter.delete('/:id', verifyAccessToken, async (req, res) => {
  const userId = res.locals.user.id;
  const { id } = req.params;

  if (Number.isNaN(+id)) return res.sendStatus(400);

  await Favorite.destroy({
    where: {
      tourId: id,
      userId,
    },
  });
  res.sendStatus(200);
});

module.exports = favouriteRouter;
