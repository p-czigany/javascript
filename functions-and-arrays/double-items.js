'use strict';

var ag = ['Gin', 'Whiskey', 'Wine', 'Beer'];

ag.forEach(function (elem, index, theArray) {
    theArray[index] = theArray[index].repeat(2);
});

console.log(ag);
