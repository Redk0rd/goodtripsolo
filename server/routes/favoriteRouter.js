const favouriteRouter = require('express').Router();
const { User, Tour } = require('../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
// const verifyRefreshToken = require('../middlewares/verifyRefreshToken');

favouriteRouter.get('/', verifyAccessToken, async (req, res) => {
  try {
    const { id } = res.locals.user;
    const favorite = await User.findAll({
      where: { id },
      include: [
        {
          model: Tour,
          as: 'favorites',
        },
      ],
      attributes: {
        exclude: ['password', 'isAdmin'],
      },
    });
    res.json(favorite[0].favorites);
  } catch (error) {
    console.log(error);
  }
});

module.exports = favouriteRouter;
