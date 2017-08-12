const words = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

const swapArrayElements = function swapper(array, index1, index2) {
  const sorted = array;
  if (index1 >= 0 && array.length > index1
          && array.length > index2 && index2 >= 0) {
    const swap = sorted[index1];
    sorted[index1] = sorted[index2];
    sorted[index2] = swap;
  }
};

swapArrayElements(words, 2, 5);

console.log(words.join(' '));
