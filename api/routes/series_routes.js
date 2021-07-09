'use strict'

var express = require('express');
var SerieController = require('../controllers/serie_controller');

var api = express.Router();

//rutas
api.post('/saveS',SerieController.saveSerie);
api.get('/series',SerieController.getSeries);
api.put('/serie/:id',SerieController.updateSerie);
api.delete('/serie/:id',SerieController.deleteSerie);
api.get('/serie/:id',SerieController.getSerie);

//exportamos:
module.exports = api;