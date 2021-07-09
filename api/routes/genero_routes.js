'use strict'

var express = require('express');
var GeneroController = require('../controllers/genero_controller');

var api = express.Router();

//rutas
api.post('/saveG',GeneroController.saveGenero);
api.get('/generos',GeneroController.getGeneros);
api.put('/genero/:id',GeneroController.updateGenero);
api.delete('/genero/:id',GeneroController.deleteGenero);
api.get('/genero/:id',GeneroController.getGenero);

//exportamos:
module.exports = api;