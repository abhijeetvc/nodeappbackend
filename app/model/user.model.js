//const { default: mongoose } = require("mongoose");

module.exports=mongoose=>{

    var schema=mongoose.Schema({
        firstName:String,
        lastName:String,
        city:String,
        email:String
    })

    const User=mongoose.model('user',schema)
    return User
}