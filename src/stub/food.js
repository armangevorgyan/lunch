var clone = require('clone'),
    food = {
        id: 0,
        foodName: 'Title',
        type: 'dish'
    },
    examples = {
        dish: ['Rice', 'Chicken', 'Pork'],
        salad: ['Tabule', 'Caesar', 'Greek']
    };

function random(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

function getRandom(type) {
    var currentFood = clone(food);
    currentFood.type = type;
    currentFood.foodName = examples[type][random(0, examples[type].length - 1)]
    return currentFood;
}

module.exports.getRandom = getRandom;
