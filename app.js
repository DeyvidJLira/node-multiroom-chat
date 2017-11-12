//Import server configurations
var app = require('./config/server');

//Define port
var server = app.listen(80, function() {
    console.log("Server ON");
});

var io = require('socket.io').listen(server);

//Create a connection by websocket
io.on('connection', function(socket) {
    console.log("User connected");

    socket.on('disconnect', function() {
        console.log("User disconnected");
    });
});