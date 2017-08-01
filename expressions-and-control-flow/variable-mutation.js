'use strict';

const a = 3;
const toAdd = 10;
console.log(a + " + " + toAdd + " = " + (a + toAdd));

const b = 100;
const toSubstract = 7;
console.log(b + " - " + toSubstract + " = " + (b - toSubstract));

const c = 44;
const toMultiplyBy = 2;
console.log(c + " * " + toMultiplyBy + " = " + c * toMultiplyBy);

const d = 125;
const toDivideBy = 5;
console.log(d + " / " + toDivideBy + " = " + d / toDivideBy);

const e = 8;
const toRaiseToThePowerOf = 3;
console.log(e + " ^ " + toRaiseToThePowerOf + " = " + Math.pow(e, toRaiseToThePowerOf));

const f1 = 123;
const f2 = 345;
console.log(f1 + " > " + f2 + " ? " + (f1 > f2));

const g1 = 350;
const g2 = 200;
console.log("2 * " + g2 + " > " + g1 + " ? " + ((2 * g2) > g1));

const h = 1357988018575474;
const divider = 11;
console.log(h + " mod " + divider + " = 0 ? " + ((h % divider) == 0));

const i1 = 10;
const i2 = 3;
console.log(i1 + " is higher than " + i2 + " squared and smaller than " + i2 + " cubed? " + (i1 > Math.pow(i2, 2) && i1 < Math.pow(i2, 3)))

const j = 1521;
console.log("Is " + j + " dividable by 3 or 5? " + ((j % 3 == 0) || (j % 5 == 0)));


var k = 'Apple';

String.prototype.repeat = function(times) {
   return (new Array(times + 1)).join(this);
};

console.log("The string " + k + " four times: " + k.repeat(4));
