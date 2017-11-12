//Import server configurations
var app = require('./config/server');

//Define port
var server = app.listen(80, function() {
    console.log("Server ON");
});

var io = require('socket.io').listen(server);

//Create global variable
app.set('io', io);

//Create a connection by websocket
io.on('connection', function(socket) {
    console.log("User connected");

    socket.on('disconnect', function() {
        console.log("User disconnected");
    });

    socket.on('sendMessageServer', function(data) {
        //Message
        socket.emit(
            'sendMessageClient',
            {nick: data.nick, message: data.message}
        );

        socket.broadcast.emit(
            'sendMessageClient',
            {nick: data.nick, message: data.message}
        );

    });

    socket.on('sendUserServer', function(data) {
        //Users
        socket.emit(
            'sendUserClient',
            {nick: data.nick}
        );

        socket.broadcast.emit(
            'sendUserClient',
            {nick: data.nick}
        );  
    });
});