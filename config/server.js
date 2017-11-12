var express = require('express');
var consign = require('consign');
var bodyParse = require('body-parser');
var expressValidator = require('express-validator');

//Start express object
var app = express();

//Configure EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Configure middlewares
app.use(express.static('./app/public'));
app.use(bodyParse.urlencoded({extended: true}));
app.use(expressValidator());

//Configure autoload
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//Export app object
module.exports = app;