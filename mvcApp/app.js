var express = require('express');
const config =  require('./config/config.js'); 
const{port}=config;
const hbs = require('express-handlebars');
const path = require('path');
var app = express();
const favoriteRouter = require('./routes/favorite.route');
const productRouter = require('./routes/product.route');

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, './views/layouts/')
   }));
   
 app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
    res.render('home', { title: " aquí pon un mensaje "});

});
 
app.listen(port);
app.use('/favorite',favoriteRouter);
app.use('/product',productRouter);
