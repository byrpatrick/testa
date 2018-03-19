//LLamada a las librerias
const mongoose = require('mongoose');
const config = require("./config");
const api = require('./app');

mongoose.connect(config.db,(err,res)=>{
    if(err) throw err
    console.log('Conexion establecida...');
    api.listen(config.port,()=>{
        console.log(`Corriendo en el puerto:${config.port}`);
    });
});

