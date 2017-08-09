'use strict';

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];
for (let elem of girls) {
    order.splice(order.length, 0, elem);    
    order.splice(order.length, 0, boys[girls.indexOf(elem)]);
}
console.log(order);
