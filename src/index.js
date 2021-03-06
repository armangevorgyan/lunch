var express = require('express'),
    clone = require('clone'),

    app = express(),

    // stub
    user = require(__dirname + '/stub/user.js'),
    users = require(__dirname + '/stub/users.js'),
    salads = require(__dirname + '/stub/salads.js'),
    dishes = require(__dirname + '/stub/dishes.js'),
    foodChoice = require(__dirname + '/stub/foodChoice.js'),
    foodAvailability = require(__dirname + '/stub/foodAvailability.js'),
    foodOptions = require(__dirname + '/stub/foodOptions.js');
    food = require(__dirname + '/stub/food.js');

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

app.get('/food-choice/:fromDate/:toDate', function(request, response) {
    response.json(foodChoice.getChoice(new Date(request.params.fromDate)));
});

app.put('/food-choice/:foodAvailabilityId', function(request, response) {
    response.json({});
});

app.post('/food-choice/:id/:foodAvailabilityId', function(request, response) {
    response.json({});
});

app.get('/food-availability/:fromDate/:toDate', function(request, response) {
    response.json(foodAvailability.getAvailability(new Date(request.params.fromDate)));
});

// food
app.get('/food/:type', function(request, response) {
    response.json([
        food.getRandom(request.params.type),
        food.getRandom(request.params.type),
        food.getRandom(request.params.type)
    ]);
});

app.get('/food-options', function(request, response) {
    response.json(foodOptions.getFoodOptions(request.query.type));
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
