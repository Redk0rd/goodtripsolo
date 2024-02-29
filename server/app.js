const express = require('express');

const app = express();
const cors = require('cors');
const morgan = require('morgan');
const categoryRouter = require('./routes/categoryRouter');
const itemRouter = require('./routes/itemRouter');

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/category', categoryRouter);
app.use('/api/item', itemRouter);

module.exports = app;
