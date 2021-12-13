const cors = require('cors');
const express = require('express');
const server = express();
const path = require('path');

//Configuraciones
server.set('port',8080);
server.set('host','localhost');

//Middlewares
server.use(express.static(path.join(__dirname, 'build')));
server.use(express.json());
server.use(cors());

//Rutas
server.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'build','index.html'));
});
server.use('/datos', require('./routes/datos.js'));

server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
})

module.exports = server;