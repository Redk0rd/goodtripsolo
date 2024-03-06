/* eslint-disable no-unused-expressions */
const tourRouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');

const { Tour, User, CategoryTour } = require('../db/models');
const upload = require('../middlewares/multerMid');

tourRouter.get('/:catTId/offset/:offset', async (req, res) => {
  const { catTId, offset } = req.params;
  if (Number.isNaN(+catTId)) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  try {
    const justTours = await Tour.findAndCountAll({
      offset,
      limit: 3,
      include: [
        {
          model: User,
          as: 'author',
          attributes: {
            exclude: ['password', 'isAdmin'],
          },
        },
        {
          model: CategoryTour,
        },
      ],
      where: +catTId !== 0 ? { catTId } : {},
      order: [['id', 'ASC']],
    });

    // if (Number(id) !== 0) {
    //   justTours.rows = justTours.rows.filter((el) => el.catTId === Number(id));
    // }
    res.json(justTours);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

tourRouter.get('/one/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(+id)) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  try {
    const oneTour = await Tour.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: 'author',
          attributes: {
            exclude: ['password', 'isAdmin'],
          },
        },
        {
          model: CategoryTour,
        },
      ],
    });
    res.json(oneTour);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

tourRouter.post('/', upload.single('file'), async (req, res) => {
  const { name, description, price, catTId, location, date, endDate, places, authorId } = req.body;

  if (!name || !description || !catTId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!req.file) {
    return res.status(400).json({ message: 'File not found' });
  }

  // Имя файла для сохранения
  const fileName = `${Date.now()}.webp`;

  // Путь для сохранения оригинального имени файла в базе данных
  const pathImg = fileName;

  // Обработка и сохранение файла с новым именем
  const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
  await fs.writeFile(`./public/img/${fileName}`, outputBuffer); // Исправленная строка

  // Создание записи тура с pathImg содержащим оригинальное имя файла
  const newTour = await Tour.create({
    name,
    description,
    price,
    catTId,
    authorId,
    location,
    date,
    endDate,
    places,
    pathImg, // Сохраняем оригинальное имя файла
    // Возможно, вам также потребуется сохранить измененное имя файла для доступа к файлу на сервере
  });
  console.log(newTour);
  return res.json(newTour);
});

tourRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(+id) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  const tour = await Tour.findByPk(id);
  if (!tour) {
    return res.status(404).json({ error: 'Tour not found' });
  }
  await fs.unlink(`./public/img/${tour.path}`).catch((e) => console.log(e));
  await Tour.destroy({ where: { id } });
  res.json({ message: 'Tour deleted' });
});

module.exports = tourRouter;
