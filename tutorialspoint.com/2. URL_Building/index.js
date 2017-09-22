var express = require('express');
var app = express();

app.get('/things/:name/:id([0-9]{5})', function(req, res){//id will be a 5 digit long number
    res.send('ID: ' + req.params.id + '\nName: ' + req.params.name);
});

app.get('*', function(req, res){
    res.send('Sorry, this is invalid URL. ID must be a 5 digit long number');
});
app.listen(8000);