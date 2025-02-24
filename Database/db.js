const mongoose = require('mongoose');
require('dotenv').config();

const DatabaseConnection = async ()=>{
    try{
      await mongoose.connect(process.env.mongo_url)
      console.log("connected to database")
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }

};
module.exports = DatabaseConnection