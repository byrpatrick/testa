const express = require('express');
const bodyParser = require('body-parser');//libreria para recibir y parsear datos
const app = express();
const api = require("./routes");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//referencia 
app.use('/computron',api);

module.exports = app;