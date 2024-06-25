// Servidor de express
const express = require('express')
const app = express();

//Servidor de sockets
const server = require('http').createServer(app);

//Configuración de socket server
const io = require('socket.io')(server);


//Desplegar el directorio publico
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('Cliente conectado - ', socket.id);
    socket.on('mensaje-to-server', (data) => {
        //Cuando utilizo Socket emite solo al id al que se conectó el nuevo cliente
        // socket.emit('mensaje-from-server', data)

        //Si quiero enviar a todos los clientes, debo utilizar io.emit
        io.emit('mensaje-from-server', data) //envía a un Namespace
    })
})

server.listen(8080, () => {
    console.log('Server corriendo en el puerto :8080');
})