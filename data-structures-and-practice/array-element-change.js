'use strict';

var shop_items = ["Cupcake", 2, "Brownie", false]

shop_items[shop_items.indexOf(2)] = 'Croissant';
shop_items[shop_items.indexOf(false)] = 'Ice cream';

console.log(shop_items);
