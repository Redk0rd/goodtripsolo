const { Router } = require('express');
const fs = require('fs').promises;
const sharp = require('sharp');
const bcrypt = require('bcrypt');
const upload = require('../middlewares/multerMid');
const { User } = require('../db/models');
const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../config/cookiesConfig');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const router = Router();

router.post('/signup', async (req, res) => {
  const { name, email, password, about, phone, telegram } = req.body;

  if (name && email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          about,
          phone,
          telegram,
          name,
          password: await bcrypt.hash(password, 10),
        },
      });

      if (!created) {
        return res.status(403).json({ message: 'User already exists' });
      }

      const plainUser = user.get();
      delete plainUser.password;

      const { accessToken, refreshToken } = generateTokens({ user: plainUser });

      return res
        .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
        .status(200)
        .json({ accessToken, user: plainUser });
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });

      if (!(await bcrypt.compare(password, user.password)) || !user) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      const plainUser = user.get();
      delete plainUser.password;

      const { accessToken, refreshToken } = generateTokens({ user: plainUser });

      return res
        .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
        .status(200)
        .json({ accessToken, user: plainUser });
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/logout', (req, res) => {
  res.clearCookie('refreshToken').sendStatus(200);
});

router.get('/check', verifyAccessToken, (req, res) => {
  res.json({ user: res.locals.user, accessToken: res.locals.accessToken });
});

router.patch('/:id', upload.single('file'), async (req, res) => {
  const { id } = req.params;
  const { about, phone, telegram, name } = req.body;
  if (!name) {
    res.status(401).json({ message: 'wrong user data' });
    return;
  }
  try {
    const fileName = `${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.writeFile(`./public/img/${fileName}`, outputBuffer);
    await User.update(
      {
        about,
        phone,
        telegram,
        name,
        pathImg: fileName,
      },
      { where: { id } },
    );
    const updatedUser = await User.findOne({ where: { id } });
    res.json(updatedUser);
    console.log(updatedUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
