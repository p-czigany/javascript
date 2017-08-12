const shopItems = ['Cupcake', 2, 'Brownie', false];

const replaceArrayElement = function replace(array, toReplace, replaceWith) {
  const replaced = array;
  const index = replaced.indexOf(toReplace);
  if (index !== -1) {
    replaced[index] = replaceWith;
  }
};

replaceArrayElement(shopItems, 2, 'Croissant');
replaceArrayElement(shopItems, false, 'Ice cream');

console.log(shopItems);
