const tourRouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');

const { Tour, CategoryTour } = require('../db/models');
const upload = require('../middlewares/multerMid');

tourRouter.get('/', async (req, res) => {
  const tours = await CategoryTour.findAll({
    include: Tour,
  });
  res.json(tours);
});

tourRouter.post('/', upload.single('file'), async (req, res) => {
  const { name, description, price, catTId, location, date, endDate } = req.body;
  console.log(req.body);
  if (!name || !description || !price || !catTId) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!req.file) {
    return res.status(400).json({ message: 'File not found' });
  }

  const fileName = `${Date.now()}.webp`;
  const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
  await fs.writeFile(`./public/img/${fileName}`, outputBuffer);
  const newTour = await Tour.create({
    name,
    description,
    price,
    catTId,
    pathImg: fileName,
    location,
    date,
    endDate,
  });
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
