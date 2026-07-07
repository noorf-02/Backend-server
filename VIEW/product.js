const express = require('express');
const route = express.Router();
const {createProducts,getProducts} = require('../CONTROLLER/product')

route.post('/createProducts', createProducts);

route.get('/getProducts', getProducts)

module.exports = route;