'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//definimos el esquema del documento
var SerieSchema = Schema({
    nombre: String,
    temporadas: String,
    sinopsis: String,
    genero: String
});

module.exports = mongoose.model('Serie',SerieSchema);