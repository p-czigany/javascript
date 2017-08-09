'use strict';

var words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."];
function swapArrayElements(array, index1, index2) {
    if (array.length > index1 && array.length > index2 && index1 >= 0 && index2 >= 0) {
        var swap = array[index1];
        array[index1] = array[index2];
        array[index2] = swap;
    }
}

swapArrayElements(words, 2, 5);

console.log(words.join(' '));
