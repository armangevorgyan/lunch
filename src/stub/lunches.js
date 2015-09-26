var clone = require('clone'),

    food = require(__dirname + '/food.js');

var lunch = [
    {
        date: (new Date()).toISOString(),
        food: [
            clone(food),
            clone(food)
        ]
    },
    {
        date: (new Date()).toISOString(),
        food: [
            clone(food),
            clone(food)
        ]
    },
    {
        date: (new Date()).toISOString(),
        food: [
            clone(food),
            clone(food)
        ]
    },
    {
        date: (new Date()).toISOString(),
        food: [
            clone(food),
            clone(food)
        ]
    },
    {
        date: (new Date()).toISOString(),
        food: [
            clone(food),
            clone(food),
            clone(food)
        ]
    }
];

module.exports = lunch;
