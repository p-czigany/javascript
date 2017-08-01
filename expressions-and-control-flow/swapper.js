'use strict';

var a = 123;
var b = 526;

console.log('Original "a" value: ' + a);
console.log('Original "b" value: ' + b);

var swap = a;
a = b;
b = swap;

console.log('Swapped "a" value: ' + a);
console.log('Swapped "b" value: ' + b);
