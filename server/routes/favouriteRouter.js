const favouriteRouter = require('express').Router();
const {Tour, CategoryTour} = require('../db/models')

favouriteRouter.get('/', async (req,res) => {
    const favourites = await  
})

module.exports = favouriteRouter;