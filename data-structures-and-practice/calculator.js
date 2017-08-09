'use strict';

var args = process.argv.splice(2);

if (args.length === 3) {
    switch (args[0]) {
        case '+':
            console.log(+ args[1] + + args[2]);
            break;
        case '-':
            console.log(+ args[1] - + args[2]);
            break;
        case '*':
            console.log(+ args[1] * + args[2]);
            break;
        case '/':
            console.log(+ args[1] / + args[2]);
            break;
    }
} else {
    console.log('Not the right number of input parameters.')
}
