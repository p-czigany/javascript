'use strict';

var students = [
    { 'name': 'Teodor', 'age': 3, 'candies': 2 },
    { 'name': 'Rezso', 'age': 9.5, 'candies': 2 },
    { 'name': 'Zsombor', 'age': 12, 'candies': 5 },
    { 'name': 'Aurel', 'age': 7, 'candies': 3 },
    { 'name': 'Olaf', 'age': 12, 'candies': 7 },
    { 'name': 'Gerzson', 'age': 10, 'candies': 1 },
]

function candyCount(listOfStudents) {
    var candies = 0;
    for (var student of listOfStudents) {
        candies += student.candies;
    }
    return candies;
}

console.log(candyCount(students));
