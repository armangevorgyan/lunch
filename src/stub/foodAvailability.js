var clone = require('clone'),

    food = require(__dirname + '/food.js');

function getAvailability(fromDate, toDate) {
    var availability = [],
        currentDate,
        i,
        types;

    ['dish','salad'].forEach(function(type) {
        for(i = 0; i < 5; i++) {
            currentDate = new Date(fromDate);
            currentDate.setDate(currentDate.getDate() + i);
            availability.push({
                id: 0,
                availableDate: currentDate.toISOString(),
                food: food.getRandom(type),
                foodNumber: i
            });
        }
    });

    return availability;
}

module.exports.getAvailability = getAvailability;
