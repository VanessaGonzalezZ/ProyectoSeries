'use strict'

//declaramos un objeto del modelo
var Serie = require('../models/serie');

//funcion para insertar un nuevo objeto en la Bd
function saveSerie(req,res){
    var serie = new Serie();
    var params = req.body;

    //asginamos los valores de los parámetros a las propiedades del objeto
    serie.nombre = params.nombre;
    serie.temporadas = params.temporadas;
    serie.sinopsis = params.sinopsis;
    serie.genero = params.genero;

    //validamos que no vengan valores nulos e insertamos el registro
    if(serie.nombre != '' && serie.temporadas != '' && serie.sinopsis != '' && serie.genero != ''){
        //insertamos el registro
        serie.save((err,serieGuardada) => {
            if(err){
                res.status(500).send({mensaje: 'Error al guardar el registro'});
            }else{
                if(!serieGuardada){
                    res.status(404).send({mensaje: 'Error al guardar'});
                }else{
                    res.status(200).send({serie: serieGuardada});
                }
            }
        });
    }else{
        res.status(500).send({mensaje: 'Teclea todos los datos'});
    }
}

//funcion que obtiene todos los documentos de la BD
function getSeries(req,res){
    Serie.find(
        function(err,series){
            if(err){
                res.status(500).send({mensaje: 'Error al obtener los datos'});
            }else{
                res.json(series);
            }
        }
    );
}

//función que permite actualizar un registro
function updateSerie(req,res){
    var idSerie = req.params.id;
    var serieActualizada = req.body;

    Serie.findByIdAndUpdate(idSerie,serieActualizada,(err,serieModificada) => {
        if(err){
            res.status(500).send({mensaje: 'Error en el servidor'});
        }else{
            if(!serieModificada){
                res.status(404).send({mensaje: 'No se pudo actualizar'});
            }else{
                res.status(200).send({serie: serieModificada});
            }
        }
    });
}

//función para eliminar registro
function deleteSerie(req,res){
    var idSerie = req.params.id;

    Serie.findByIdAndRemove(idSerie, (err, serieEliminada) =>{
        if(err){
            res.status(500).send({mensaje: 'Error en el servidor'});
        }else{
            if(!serieEliminada){
                res.status(404).send({mensaje: 'No se pudo eliminar'});
            }else{
                res.status(200).send({serie: serieEliminada});
            }
        }
    });
}


//función que permite obtener un solo documento por su ID
function getSerie(req,res){
    var idSerie = req.params.id;

    Serie.findById(idSerie, (err,serieEncontrada) => {
        if(err){
            res.status(500).send({mensaje: 'Error en el servidor'});
        }else{
            if(!serieEncontrada){
                res.status(404).send({mensaje: 'No se pudo encontrar el registro'});
            }else{
                res.status(200).send({serie: serieEncontrada});
            }
        }
    });
}



//exportamos las funciones:
module.exports = {
    saveSerie,
    getSeries,
    updateSerie,
    deleteSerie,
    getSerie
};