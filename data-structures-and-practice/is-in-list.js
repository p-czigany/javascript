'use strict';

function numChecker(listOfNumbers, toFind) {
    for (let elem of toFind) {
        if (!listOfNumbers.includes(elem)) {
            return false;
        }
    }
    return true;
}

var listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];

var toFind = [4, 8, 12, 16];
console.log(numChecker(listOfNumbers, toFind));
