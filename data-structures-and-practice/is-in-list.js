const listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
const toFind = [4, 8, 12, 16];

const numChecker = function numCheckerFunction() {
  let allFound = true;
  toFind.forEach((elem) => {
    if (!listOfNumbers.includes(elem)) {
      allFound = false;
    }
  });
  return allFound;
};

console.log(numChecker());
