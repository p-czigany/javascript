'use strict';

var size = 4;

var matrix = [];

for (var i = 0; i < size; i++) {
    matrix.push([]);
    for (var j = 0; j < size; j++) {
        var x = (i + j === 3) ? 1 : 0;
        matrix[i].push(x);
    }
}
console.log(matrix);
