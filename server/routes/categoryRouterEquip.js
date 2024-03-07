const categoryRouter = require('express').Router();

const { CategoryEquipment, Equipment } = require('../db/models');

categoryRouter.get('/', async (req, res) => {
  const categoriesEquip = await CategoryEquipment.findAll({
    include: Equipment,
  });
  res.json(categoriesEquip);
});

categoryRouter.post('/', async (req, res) => {
  const { categoryEquip } = req.body;
  if (!CategoryEquipment) {
    return res.status(400).json({ error: 'Category is required' });
  }
  const newCategoryEquip = await CategoryEquipment.create({ categoryEquip });
  res.json(newCategoryEquip);
});

categoryRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(parseInt(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  const { categoryEquip } = req.body;
  if (!categoryEquip) {
    return res.status(400).json({ error: 'Category is required' });
  }
  const updatedCategoryEquip = await CategoryEquipment.update({ categoryEquip }, { where: { id } });
  res.json(updatedCategoryEquip);
});

categoryRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(parseInt(id)) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  await CategoryEquipment.destroy({ where: { id } });
  res.json({ message: 'Category deleted' });
});

module.exports = categoryRouter;
