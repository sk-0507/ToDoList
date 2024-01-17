const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();
const url = process.env.URL
const Connection  =()=>{
    mongoose.connect(url).then(()=>{
        console.log("Database is connected !!!")
    })
    .catch((error)=>{
        console.log(error)
    });
    
}

module.exports = Connection 