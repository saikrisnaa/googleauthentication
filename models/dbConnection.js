const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
     .then(()=>{
        console.log("mongo is connected");
     }).catch((err) => {
        console.log("mongo error",err);
     })