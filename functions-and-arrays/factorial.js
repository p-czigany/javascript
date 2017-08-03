'use strict';

function factorio(number) {
    if (number === 1) {
        return 1;
    }
    return number * factorio(number - 1);
}

console.log(factorio(3));
