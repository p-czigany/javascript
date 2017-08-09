'use strict';

var far = ["kuty", "macsk", "kacs", "rók", "halacsk"];
var letter = 'a';
far.forEach(function (word, index, theArray) {
    theArray[index] += letter;
});
console.log(far);
