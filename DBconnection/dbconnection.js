const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.URL).then(()=>{
        console.log('DB CONNECTED')
    }).catch(err=>{
        console.log('ERROR IN DB CONNECTION')
    })
}

module.exports = connectDB;