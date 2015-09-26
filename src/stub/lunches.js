var clone = require('clone'),

    food = require(__dirname + '/food.js');

function getLuches(date) {
    var lunches = [],
        currentDate,
        i;
    for(i = 0; i < 5; i++) {
        currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + i);
        lunches.push({
            date: currentDate.toISOString(),
            food: [
                clone(food),
                clone(food)
            ]
        });
    }
    return lunches;
}

module.exports.getLuches = getLuches;
