const { Comment } = require('../db/models');

async function isAdmin(req, res, next) {
  // console.log('reslocals.user:', res.locals.user);
  const { id } = req.params;
  console.log(id);
  if (Number.isNaN(+id)) return res.sendStatus(400);

  try {
    const deleteComment = await Comment.findOne({
      where: {
        // userId: Number(id),
        id: Number(id),
      },
    });

    if (
      (res.locals.user && res.locals.user.isAdmin === true) ||
      (res.locals.user && res.locals.user.id === deleteComment.userId)
    ) {
      return next();
    }
    // res.redirect('/');
    return res.sendStatus(403);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }

  // return next(); // Добавленный возврат значения в конце функции
}

module.exports = isAdmin;
