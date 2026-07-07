const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema ({
    title:String,
    description:String,
    Image:String,
    price:Number,
    category:String
});

const product = mongoose.model('product', productSchema);
module.exports = product;