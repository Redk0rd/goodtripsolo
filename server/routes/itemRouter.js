const itemRouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');

const { Item, Category } = require('../db/models');
const upload = require('../middlewares/multerMid');

itemRouter.get('/', async (req, res) => {
  const items = await Category.findAll({
    include: Item,
  });
  res.json(items);
});

itemRouter.post('/', upload.single('file'), async (req, res) => {
  const { name, description, price, cat_id } = req.body;
  console.log(req.body);
  if (!name || !description || !price || !cat_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!req.file) {
    return res.status(400).json({ message: 'File not found' });
  }

  const fileName = `${Date.now()}.webp`;
  const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
  await fs.writeFile(`./public/img/${fileName}`, outputBuffer);
  const newItem = await Item.create({
    name,
    description,
    price,
    cat_id,
    path: fileName,
  });
  res.json(newItem);
});

itemRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(+id) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  const item = await Item.findByPk(id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  await fs.unlink(`./public/img/${item.path}`).catch((e) => console.log(e));
  await item.destroy({ where: { id } });
  res.json({ message: 'Item deleted' });
});

module.exports = itemRouter;
