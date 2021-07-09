'use strict'

var mongoose = require('mongoose');

var app = require('./app');
var port = process.env.PORT || 3977;

//hacemos conexion a BD
mongoose.connect('mongodb://localhost:27017/seriesds02',(err,res) => {
    if(err){
        throw err;
    }else{
        console.log('Conexión exitosa con la base de datos...');
        app.listen(port, function(){
            console.log('Servidor escuchando en http://localhost:'+port);
        })
    }
});
