const girls = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
const boys = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];
const order = [];
const minimumLength = Math.min(girls.length, boys.length);

for (let i = 0; i < minimumLength; i += 1) {
  order.splice(order.length, 0, girls[i]);
  order.splice(order.length, 0, boys[i]);
}

console.log(order);
