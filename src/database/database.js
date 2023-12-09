const mongoose  = require("mongoose");

require("dotenv").config()
const db_Port = process.env.MONGO_URL 

const connectDB = () =>{
    try{
        mongoose.connect(db_Port);
        console.log("DB is connect ")
    }catch(e){
        console.log("DB is not connect ")
    }
}

module.exports = connectDB