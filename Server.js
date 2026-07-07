const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;


app.all('/*path', (req,res)=>{
    res.send(`This path does not exist on port ${port}`);
})

app.get('/', (req,res)=>{
    res.send(`This is the homepage running on port ${port}`);
})

app.listen(port, ()=>{
    console.log(`The server is running on ${port}`);
})
