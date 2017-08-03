'use strict';

var al = 'Greenfox';

function greet(name) {
    if (name === undefined || name === null) {
        name = 'Anonymus';
    }
    console.log('Greetings, dear ' + name);
}

greet(al);
