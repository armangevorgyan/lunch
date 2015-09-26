var clone = require('clone'),

    food = require(__dirname + '/food.js');

function getChoice(fromDate, toDate) {
    var choice = [],
        currentDate,
        i,
        types;

    ['dish','salad'].forEach(function(type) {
        for(i = 0; i < 5; i++) {
            currentDate = new Date(fromDate);
            currentDate.setDate(currentDate.getDate() + i);
            choice.push({
                foodAvailability: {
                    id: 0,
                    availableDate: currentDate.toISOString(),
                    food: food.getRandom('dish')
                }
            });
        }
    });

    return choice;
}

module.exports.getChoice = getChoice;
