const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const route = require('./VIEW/product');
const dbconnection = require('./DBconnection/dbconnection');
const app = express();
const port = process.env.PORT;



app.use('/', route);

dbconnection();
app.all('/*path', (req,res)=>{
    res.send(`This path does not exist on port ${port}`);
})

app.get('/', (req,res)=>{
    res.send(`This is the homepage running on port ${port}`);
})

app.listen(port, ()=>{
    console.log(`The server is running on ${port}`);
})
