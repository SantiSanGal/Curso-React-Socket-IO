class Sockets {
    constructor(io) {
        this.io = io
        this.socketEvents()
    }

    socketEvents() {
        //On Connection
        this.io.on('connection', (socket) => {
            console.log('Cliente conectado - ', socket.id);

            //Escuchat eventos
            socket.on('mensaje-to-server', (data) => {
                //Cuando utilizo Socket emite solo al id al que se conectó el nuevo cliente
                // socket.emit('mensaje-from-server', data)
                console.log(data);
                //Si quiero enviar a todos los clientes, debo utilizar io.emit
                this.io.emit('mensaje-from-server', data) //envía a un Namespace
            })
        })
    }
}

module.exports = Sockets;