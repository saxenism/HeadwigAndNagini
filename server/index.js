const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3001;
const router = require('./router.js'); //Our custom middleware

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("We have a new connection!!");

    socket.on('join', ({name, room}) => {
        console.log(name, room);
    })

    socket.on('disconnect', () => {
        console.log("User has left the chat");
    });
});

app.use(router);

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});