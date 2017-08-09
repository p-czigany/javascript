'use strict';

var students = [
    { 'name': 'Rezso', 'age': 9.5, 'candies': 2 },
    { 'name': 'Gerzson', 'age': 10, 'candies': 1 },
    { 'name': 'Aurel', 'age': 7, 'candies': 3 },
    { 'name': 'Zsombor', 'age': 12, 'candies': 5 }
]

function filterByMinimumCandies(listOfStudents, minimumCandies) {
    for (var student of listOfStudents) {
        if (student.candies >= minimumCandies) {
            console.log(student.name + " has more than 4 candies (" + student.candies + ").");
        }
    }
}

function averageNumberOfCandies(listOfStudents) {
    var sum = 0;
    for (var student of listOfStudents) {
        sum += student.candies;
    }
    console.log(sum / listOfStudents.length);
}

filterByMinimumCandies(students, 5);
averageNumberOfCandies(students);
