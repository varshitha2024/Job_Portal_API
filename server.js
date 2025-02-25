require('dotenv').config()
const express = require("express")
const DatabaseConnection = require('./Database/db')
const jobRouter = require('./Routes/route')
 app = express()
DatabaseConnection();

app.use(express.json())
app.use('/jobs',jobRouter)
app.listen(process.env.PORT || 3000,()=>{
    console.log("server listening")
})