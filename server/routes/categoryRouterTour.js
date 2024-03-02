const categoryRouter = require('express').Router();

const { CategoryTour } = require('../db/models');

categoryRouter.get('/', async (req, res) => {
  const categoriesTour = await CategoryTour.findAll();
  
  res.json(categoriesTour);
});

categoryRouter.post('/', async (req, res) => {
  const { categoryTour } = req.body;
  if (!categoryTour) {
    return res.status(400).json({ error: 'Category is required' });
  }
  const newCategoryTour = await CategoryTour.create({ categoryTour });
  res.json(newCategoryTour);
});

categoryRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(parseInt(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  const { categoryTour } = req.body;
  if (!categoryTour) {
    return res.status(400).json({ error: 'Category is required' });
  }
  const updatedCategoryTour = await CategoryTour.update({ categoryTour }, { where: { id } });
  res.json(updatedCategoryTour);
});

categoryRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(parseInt(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  await CategoryTour.destroy({ where: { id } });
  res.json({ message: 'Category deleted' });
});

module.exports = categoryRouter;
