require('dotenv').config()
const express = require("express")
const DatabaseConnection = require('./Database/db')
 app = express()
DatabaseConnection();
app.listen(process.env.PORT,()=>{
    console.log("server listening")
})