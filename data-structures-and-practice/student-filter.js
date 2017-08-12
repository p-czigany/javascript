const students = [{
  name: 'Rezso',
  age: 9.5,
  candies: 2,
},
{
  name: 'Gerzson',
  age: 10,
  candies: 1,
},
{
  name: 'Aurel',
  age: 7,
  candies: 3,
},
{
  name: 'Zsombor',
  age: 12,
  candies: 5,
}];

const filterByMinimumCandies = function
  filterByMinimumCandiesFunction(minimumCandies) {
  students.forEach((elem) => {
    if (elem.candies >= minimumCandies) {
      console.log(elem.name, 'has more than', (minimumCandies - 1),
        'candies (', elem.candies, ').');
    }
  });
};

function averageNumberOfCandies() {
  let sum = 0;
  students.forEach((elem) => {
    sum += elem.candies;
  });
  console.log('The average number of candies is:', sum / students.length, '.');
}

filterByMinimumCandies(5);
averageNumberOfCandies();
