//Import server configurations
var app = require('./config/server');

//Define port
app.listen(80, function() {
    console.log("Server ON");
});