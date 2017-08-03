'use strict';

function sum(upTo) {
    if (upTo === 0) {
        return 0;
    }
    return upTo + sum(upTo - 1);
}

console.log(sum(4));
