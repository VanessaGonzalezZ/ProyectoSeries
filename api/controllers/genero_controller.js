'use strict'

//declaramos un objeto del modelo
var Genero = require('../models/genero');

//funcion para insertar un nuevo objeto en la Bd
function saveGenero(req,res){
    var genero = new Genero();
    var params = req.body;

    //asignamos los valores de los parámetros a las propiedades del objeto
    genero.generoC = params.generoC;
    genero.descripcion = params.descripcion;

    //validamos que no vengan valores nulos e insertamos el registro
    if(genero.generoC != '' && genero.descripcion != '' ){
        //insertamos el registro
        genero.save((err,generoGuardado) => {
            if(err){
                res.status(500).send({mensaje: 'Error al guardar el registro'});
            }else{
                if(!generoGuardado){
                    res.status(404).send({mensaje: 'Error al guardar'});
                }else{
                    res.status(200).send({genero: generoGuardado});
                }
            }
        });
    }else{
        res.status(500).send({mensaje: 'Teclea todos los datos'});
    }
}

//funcion que obtiene todos los documentos de la BD
function getGeneros(req,res){
    Genero.find(
        function(err,generos){
            if(err){
                res.status(500).send({mensaje: 'Error al obtener los datos'});
            }else{
                res.json(generos);
            }
        }
    );
}

//función que permite actualizar un registro
function updateGenero(req,res){
    var idGenero = req.params.id;
    var generoActualizado = req.body;

    Genero.findByIdAndUpdate(idGenero,generoActualizado,(err,generoModificado) => {
        if(err){
            res.status(500).send({mensaje: 'Error en el servidor'});
        }else{
            if(!generoModificado){
                res.status(404).send({mensaje: 'No se pudo actualizar'});
            }else{
                res.status(200).send({genero: generoModificado});
            }
        }
    });
}

//función para eliminar registro
function deleteGenero(req,res){
    var idGenero = req.params.id;

    Genero.findByIdAndRemove(idGenero, (err, generoEliminado) =>{
        if(err){
            res.status(500).send({mensaje: 'Error en el servidor'});
        }else{
            if(!generoEliminado){
                res.status(404).send({mensaje: 'No se pudo eliminar el registro'});
            }else{
                res.status(200).send({genero: generoEliminado});
            }
        }
    });
}


//función que permite obtener un solo documento por su ID
function getGenero(req,res){
    var idGenero = req.params.id;

    Genero.findById(idGenero, (err,generoEncontrado) => {
        if(err){
            res.status(500).send({mensaje: 'Error en el servidor'});
        }else{
            if(!generoEncontrado){
                res.status(404).send({mensaje: 'No se pudo encontrar el registro'});
            }else{
                res.status(200).send({genero: generoEncontrado});
            }
        }
    });
}

//exportamos las funciones:
module.exports = {
    saveGenero,
    getGeneros,
    updateGenero,
    deleteGenero,
    getGenero
};