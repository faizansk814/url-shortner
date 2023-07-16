const express=require('express')
const connection = require('./connection/db')
const urlrouter = require('./routes/url.router')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use("/url",urlrouter)
app.listen(4031,async ()=>{
    try {
       await connection
       console.log("connected")
    } catch (error) {
        console.log(error)
    }
    console.log("connected to server")
})
