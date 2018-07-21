"use strict";

const socketServices = (https) => {

    const io = require('socket.io')(https.h);
    console.log(`Socket server up at: ${https.p}`);

    io.on('connection', (socket)=> {
        console.log('Client connected!');

        socket.on('toServer', (data)=> {
            console.log(data);
            socket.broadcast.emit('toClient', data);
        });
    });

    return io;
};

module.exports = {
    createSocketServer: (https) => {
        return socketServices(https);
    }
};


