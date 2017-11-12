module.exports = function(application) {
    application.get('/chat', function(request, response) {
        response.render('chat');
    })

    application.post('/chat', function(request, response) {
        response.render('chat');
    });
}