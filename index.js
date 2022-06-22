var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./route')

mongoose.connect("mongodb+srv://maifizumaretiya:maifiz9292@cluster0.u9ppw.mongodb.net/Student?retryWrites=true&w=majority").then(()=>{
    console.log("DB Connected");

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(express.json())
    app.use('/api',router)

    app.listen(process.env.POST,()=>{
        console.log("Server Started");
    })
}).catch((err)=>{
    console.log(err);
})