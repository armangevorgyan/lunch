var clone = require('clone'),
    food = {
        id: 0,
        foodName: 'Title',
        type: 'dish',
        imageUrl: ''
    },
    examples = {
        dish: ['Rice', 'Chicken', 'Pork', 'Schnitzel', 'Solyanka', 'Borsh', 'Buckwheat'],
        salad: ['Tabule', 'Caesar', 'Greek']
    };

function random(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

function getRandom(type) {
    var currentFood = clone(food),
        randomTitile = examples[type][random(0, examples[type].length - 1)];
    currentFood.type = type;
    currentFood.foodName = randomTitile;
    currentFood.imageUrl = 'uploads/' + randomTitile.toLowerCase() + '.jpg'
    return currentFood;
}

module.exports.getRandom = getRandom;
