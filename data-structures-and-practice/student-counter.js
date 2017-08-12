const students = [{
  name: 'Teodor',
  age: 3,
  candies: 2,
},
{
  name: 'Rezso',
  age: 9.5,
  candies: 2,
},
{
  name: 'Zsombor',
  age: 12,
  candies: 5,
},
{
  name: 'Aurel',
  age: 7,
  candies: 3,
},
{
  name: 'Olaf',
  age: 12,
  candies: 7,
},
{
  name: 'Gerzson',
  age: 10,
  candies: 1,
}];

const candyCount = function candyCountFunction() {
  let candies = 0;
  students.forEach((elem) => {
    candies += elem.candies;
  });
  return candies;
};

const ageSumOfStudentsWithLessThanFiveCandies = function
  ageSumOfStudentsWithLessThanFiveCandiesFunction() {
  let ageSum = 0;
  students.forEach((elem) => {
    if (elem.candies < 5) {
      ageSum += elem.age;
    }
  });
  return ageSum;
};

console.log(candyCount());
console.log(ageSumOfStudentsWithLessThanFiveCandies());
