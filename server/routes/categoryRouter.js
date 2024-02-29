const categoryRouter = require('express').Router();

const { Category } = require('../db/models');

categoryRouter.get('/', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

categoryRouter.post('/', async (req, res) => {
  const { category } = req.body;
  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }
  const newCategory = await Category.create({ category });
  res.json(newCategory);
});

categoryRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(parseInt(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  const { category } = req.body;
  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }
  const updatedCategory = await Category.update({ category }, { where: { id } });
  res.json(updatedCategory);
});

categoryRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(parseInt(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  await Category.destroy({ where: { id } });
  res.json({ message: 'Category deleted' });
});

module.exports = categoryRouter;
