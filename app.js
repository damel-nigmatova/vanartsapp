const express = require("express");
const app = express(); //initialize express
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require ('mysql');
const path = require('path');

const PORT = 6000;

const db = mysql.createConnection({
    host:'localhost',
    username:'root',
    password:'',
    databse='vanartsapp'
});

db.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log("Database connected");
    }
})

//make db connection global
glodal.db = db;
//configure the middleware
app.set('port', process.env.port || PORT); //set the port
app.set('views', __dirname + '/views'); //set the view folder

app.listen(PORT, ()=>{
    console.log('The server is running on localhost:${PORT}');
})