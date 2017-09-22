var express = require('express');
var bodyParser = require('body-Parser');
var cookieParser = require('cookie-parser');
var app = express();

/*app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(cookieParser())*/

app.use(function(req, res, next){
    //console.log("A new request received at "+ Date.now());
    console.log("Start");
    next();
});

app.get('/', function(req, res, next){
    //res.send('Hello World //from app.get');
    res.send("Middle");
});

app.use('/', function(req, res){
    console.log('End');
});

app.listen(8000);