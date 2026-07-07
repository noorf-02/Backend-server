const express = require('express');
const route = express.Router();

route.post('/createProducts', (req,res)=>{
    res.send('Create Products');
})

route.get('/getProducts', (req,res)=>{
    res.send('Get Products');
})

module.exports = route;