var express = require('express');
var hbs = require('express-handlebars');
var app = express();
app.engine('hbs',hbs({extname: 'hbs'}));
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs');
app.set('first_view','./views');

app.get('/views', function(req, res){
    res.render('views', {title: 'Handlebars'});
    //res.send('hello people');
});
app.listen(8000);