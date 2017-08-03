'use strict';

var ai = [3, 4, 5, 6, 7];
console.log(ai.reduce(function (sum, value) {
    return sum + value;
}));
