//Import server configurations
var app = require('./config/server');

//Define port
var server = app.listen(80, function() {
    console.log("Server ON");
});

require('socket.io').listen(server);