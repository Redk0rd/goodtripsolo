const express = require('express');

const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const categoryRouter = require('./routes/categoryRouter');
const itemRouter = require('./routes/itemRouter');
const tokensRouter = require('./routes/tokensRouter');
const userRouter = require('./routes/userRouter');

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/category', categoryRouter);
app.use('/api/item', itemRouter);
app.use('/api/auth', userRouter);
app.use('/api/tokens', tokensRouter);
module.exports = app;
