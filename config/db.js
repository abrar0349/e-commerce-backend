const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
    }catch(err){
        console.log(`${err} data base is not connected`);
    }
}

module.exports = connectDB