'use strict';

var s = [1, 2, 3, 8, 5, 6];
var changed = s.map(function (x) {
    if (x === 8) {
        return 4;
    }
    return x;
});

console.log(changed[3]);
