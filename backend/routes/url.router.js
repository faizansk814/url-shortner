const express=require('express')
const { Genrateaurl, Redirect } = require('../controllers/url.controller')

const urlrouter=express.Router()


urlrouter.post("/add",Genrateaurl)

urlrouter.get("/get/:shortID",Redirect)

module.exports=urlrouter