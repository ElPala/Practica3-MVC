var express = require('express');

const hbs = require('express-handlebars');
const path = require('path');
var app = express();
 
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, './views/layouts/')
   }));
 app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
    res.render('home', { title: " aquí pon un mensaje "});

});
 
app.listen(3000);