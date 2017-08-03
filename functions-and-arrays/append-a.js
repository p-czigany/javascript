'use strict';

var am = 'kuty';

function appendA(toAppendTo) {
    if (toAppendTo === null || toAppendTo === undefined) {
        toAppendTo = '';
    }
    return toAppendTo += 'a';
}

console.log(appendA(am));
