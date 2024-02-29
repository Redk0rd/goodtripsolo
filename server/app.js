const express = require('express');

const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const categoryRouterTour = require('./routes/categoryRouterTour');
const categoryRouterEquip = require('./routes/categoryRouterEquip')
const tourRouter = require('./routes/tourRouter');
const equipRouter = require('./routes/equipRouter')
const tokensRouter = require('./routes/tokensRouter');
const userRouter = require('./routes/userRouter');
const commentRouter = require('./routes/commentRouter')

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/category/tour', categoryRouterTour);
app.use('/api/category/equip', categoryRouterEquip) 
app.use('/api/tour', tourRouter);
app.use('/api/equip', equipRouter)
app.use('/api/auth', userRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/comments', commentRouter);
app.use('/api/favourite')
module.exports = app;
