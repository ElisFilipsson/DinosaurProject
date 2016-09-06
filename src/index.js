var uniqueRandomArray = require('unique-random-array');
var dinosaurs = require('./dinosaurs.json');
var getRandomItem = uniqueRandomArray(dinosaurs);

module.exports = {
    all: dinosaurs,
    random: uniqueRandomArray(dinosaurs)
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
    return randomItems;
    }
}