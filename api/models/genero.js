'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//esquema del documento
var GeneroSchema = Schema({
    generoC: String, //genero cinematográfico
    descripcion: String
});

module.exports = mongoose.model('Genero',GeneroSchema);