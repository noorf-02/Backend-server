const express = require('express');
const products = require('../MODEL/product');

const createProducts = async (req,res)=>{
    const {title, description, image, price, category} = req.body
    const createdProducts = await products.create({title:title, description:description, image:image, price:price, category:category});
    res.send(createdProducts);
}

const getProducts = async(req,res)=>{
    const data = await products.find({});
    res.send(data);
}

module.exports = { createProducts, getProducts }


