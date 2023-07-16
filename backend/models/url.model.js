const mongoose=require('mongoose')

const urlSchema=mongoose.Schema({
    shortid:{type:String,unique:true},
    redirecturl:String,
    Visithistory:Array
})

const UrlModel=mongoose.model('url',urlSchema)

module.exports=UrlModel