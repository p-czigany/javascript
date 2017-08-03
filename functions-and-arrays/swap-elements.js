'use strict';

var abc = ["Arthur", "Boe", "Chloe"];
console.log(abc);
var swap = abc[0];
abc[0] = abc[2];
abc[2] = swap;
console.log(abc);
