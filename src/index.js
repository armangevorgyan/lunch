var express = require('express'),
    clone = require('clone'),

    app = express(),

    // stub
    user = require(__dirname + '/stub/user.js'),
    users = require(__dirname + '/stub/users.js'),
    salads = require(__dirname + '/stub/salads.js'),
    dishes = require(__dirname + '/stub/dishes.js');

app.use(express.static(__dirname + '/static'));

// user
app.get('/users', function(request, response) {
    response.json(users);
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

// list of users with lunches
app.get('/chooses/:date', function(request, response) {
    var i,
        chooses = clone(users);

    chooses.forEach(function(user, index) {
        chooses[index].lunch = [];
        for(i = 0; i < 5; i++) {
            chooses[index].lunch.push({
                salad: salads[Math.round(Math.random() * (salads.length - 1))],
                dish: dishes[Math.round(Math.random() * (dishes.length - 1))]
            });
        }

    });

    response.json(chooses);
});

app.post('/chooses/:date', function(request, response) {
    response.json({
        status: 'ok'
    });
});

// lunches to choose
app.get('/lunches/:date', function(request, response) {
    response.statusCode = 404;
    var lunches = {
        salads: salads,
        dishes: dishes
    };
    response.json(lunches);
});

app.post('/lunches/:date', function(request, response) {
    response.json({
        status: 'ok'
    });
});

app.listen(8000);