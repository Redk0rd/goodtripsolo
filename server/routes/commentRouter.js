const commentRouter = require('express').Router();
const { Comment, User } = require('../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

commentRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  //   const tour = await Tour.finbByPk(id);
  const comments = await Comment.findAll({
    where: { tourId: id },
    include: {
      model: User,
      attributes: ['id', 'name', 'pathImg'],
    },
  });
  res.json(comments);
});

commentRouter.post('/:id', verifyAccessToken, async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  if (Number.isNaN(+id)) return res.status(400);
  const newComment = await Comment.create({
    userId: res.locals.user.id,
    title,
    tourId: +id,
  });
  const commentWithAuthor = await Comment.findOne({
    where: { id: newComment.id },
    include: {
      model: User,
      attributes: ['id', 'name'],
    },
  });
  res.json(commentWithAuthor);
});

commentRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(+id)) return res.status(400);
  await Comment.destroy({
    where: {
      id: Number(id),
    },
  });
  res.json(200);
});
module.exports = commentRouter;
