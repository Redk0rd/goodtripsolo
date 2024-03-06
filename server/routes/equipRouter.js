const equipRouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');

const { Equipment, CategoryEquipment, User } = require('../db/models');
const upload = require('../middlewares/multerMid');

equipRouter.get('/:id/offset/:offset', async (req, res) => {
  const { id, offset } = req.params;
  if (Number.isNaN(+id)) {
    return res.status(400).json({ error: 'Id is invalid' });
  }

  try {
    const justTours = await Equipment.findAndCountAll({
      offset,
      limit: 3,
      include: [
        {
          model: User,
          // as: 'author',
          attributes: {
            exclude: ['password', 'isAdmin'],
          },
        },
        {
          model: CategoryEquipment,
        },
      ],
      where: +id !== 0 ? { catTId: id } : {},
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











// .get('/', async (req, res) => {
//   const equips = await CategoryEquipment.findAll({
//     include: Equipment,
//   });
//   res.json(equips);
// });









equipRouter.post('/', upload.single('file'), async (req, res) => {
  const { name, description, price, catEId } = req.body;
  console.log(req.body);
  if (!name || !description || !price || !catEId) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!req.file) {
    return res.status(400).json({ message: 'Equip not found' });
  }

  const fileName = `${Date.now()}.webp`;
  const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
  await fs.writeFile(`./public/img/${fileName}`, outputBuffer);
  const newEquip = await Equipment.create({
    name,
    description,
    price,
    catEId,
    pathImg: fileName,
  });
  return res.json(newEquip);
});

equipRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(+id) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Id is invalid' });
  }
  const equip = await Equipment.findByPk(id);
  if (!equip) {
    return res.status(404).json({ error: 'Equipment not found' });
  }
  await fs.unlink(`./public/img/${equip.path}`).catch((e) => console.log(e));
  await Equipment.destroy({ where: { id } });
  res.json({ message: 'Equipment deleted' });
});

module.exports = equipRouter;
