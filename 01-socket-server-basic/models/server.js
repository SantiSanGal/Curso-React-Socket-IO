// Servidor de express
const express = require('express');
//Servidor de sockets
const http = require('http');
//Configuración de socket server
const socketio = require('socket.io')
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // http server
        this.server = http.createServer(this.app);

        //configuracion de socket
        this.io = socketio(this.server, { /* configuraciones */ });
    };

    middlewares() {
        //Desplegar el directorio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')))

        //CORS
        this.app.use(cors());
    };

    configurarSockets() {
        new Sockets(this.io);
    };

    excecute() {
        //incializar middlewares
        this.middlewares();

        //inicializar sockets
        this.configurarSockets();

        //inicializar server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en el puerto:', this.port);
        })
    };
}

module.exports = Server;