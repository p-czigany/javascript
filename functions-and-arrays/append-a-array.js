'use strict';

var nimals = ["kuty", "macsk", "cic"];
nimals.forEach(function (word, index, theArray) {
    theArray[index] += "a";
});

console.log(nimals);
