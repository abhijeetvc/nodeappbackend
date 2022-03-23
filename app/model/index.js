const dbConfig=require('../config/db.config')
const mongoose=require('mongoose')

const db={}

db.url=dbConfig.url
db.mongoose=mongoose
db.users=require('./user.model')

module.exports=db
