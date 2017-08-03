'use strict';

var aj = [3, 4, 5, 6, 7];
for (var i = 0; i < 2; i++) {
    aj.reverse();
    console.log(aj);
}
var temp = aj;
var arrayLength = aj.length;
aj = [];
for (var i = 0; i < arrayLength; i++) {
    aj.push(temp.pop());
}
console.log(aj);
