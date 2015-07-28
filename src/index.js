var express = require('express'),

    app = express(),

    // stub
    user = require(__dirname + '/stub/user.js');

app.use(express.static(__dirname + '/static'));

// user
app.get('/users', function(request, response) {
    response.json([user]);
});

// sign up
app.post('/users', function(request, response) {
    response.json({
        success: ''
    });
});

app.get('/users/:id', function(request, response) {
    response.json(user);
});

app.put('/users/:id', function(request, response) {
    response.json(user);
});

app.delete('/users/:id', function(request, response) {
    response.json({
        success: ''
    });
});

// token/sign in
app.post('/token', function(request, response) {
    response.json({
        token: '1234'
    });
});

app.listen(8000);