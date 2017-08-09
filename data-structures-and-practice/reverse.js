'use strict';

var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

console.log(reverseString(reversed));

function reverseString(toReverse) {
    var reversed = '';
    for (let i = toReverse.length; i > 0; i--) {
        reversed += toReverse.substring(i - 1, i);
    }
    return reversed;
}
