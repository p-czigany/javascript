'use strict';

function printer() {
    for (var i = 0; i < arguments.length; i++) {
        if (console.log(arguments[i]) != undefined) {
            console.log(arguments[i]);
        }
    }
}

printer(1, 1, 3, 4);
