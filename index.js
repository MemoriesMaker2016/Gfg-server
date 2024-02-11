require('dotenv').config()
const express = require('express')
const Router = require('./Router/Router')
const app = express()
const cors = require('cors')
app.use(cors())
const mongoose = require('mongoose')
mongoose.connect(process.env.MongoUrl).then((e)=>{
    console.log("Success");
}).catch((e)=>{
    console.log("not sucess full");
})
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(Router)








app.listen(process.env.PORT,()=>{
console.log("sever start at ",process.env.PORT);
})