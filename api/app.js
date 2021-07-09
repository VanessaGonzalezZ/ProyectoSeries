'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//importamos archivo de rutas
var series_routes = require('./routes/series_routes');
var genero_routes = require('./routes/genero_routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    
    next();
});


//ruta base
app.use('/api',series_routes);
app.use('/api',genero_routes);

module.exports = app;
