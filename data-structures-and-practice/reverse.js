const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

const reverseString = function reverseStringFunction() {
  let reversion = '';
  for (let i = reversed.length; i > 0; i -= 1) {
    reversion += reversed.substring(i - 1, i);
  }
  return reversion;
};

console.log(reverseString());
