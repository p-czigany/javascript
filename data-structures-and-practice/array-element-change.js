'use strict';

var shop_items = ["Cupcake", 2, "Brownie", false];

replace(shop_items, 2, 'Croissant');
replace(shop_items, false, 'Ice cream');

console.log(shop_items);

function replace(array, toReplace, replaceWith) {
    let index = array.indexOf(toReplace);
    if (index !== -1) {
        array[index] = replaceWith;
    }
}
