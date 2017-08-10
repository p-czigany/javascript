'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// The frist columns should be automatically as wide as the longest key

var ingredients = [
    { 'vodka': 1, 'needs_cooling': true },
    { 'coffee_liqueur': 0, 'needs_cooling': true },
    { 'fresh_cream': 1, 'needs_cooling': true },
    { 'captain_morgan_rum': 2, 'needs_cooling': true },
    { 'mint_leaves': 0, 'needs_cooling': false },
    { 'sugar': 100, 'needs_cooling': false },
    { 'lime juice': 10, 'needs_cooling': true },
    { 'soda': 100, 'needs_cooling': true }
]

const secondColumnWidth = 15;
const thirdColumnWidth = 10;
const firstColumnWidth = firstColumnWidthFunction();

function firstColumnWidthFunction() {
    let maxLength = 10;
    ingredients.forEach(function (element) {
        const currentLength = Object.keys(element)[0].length;
        maxLength = (currentLength > maxLength) ? currentLength : maxLength;
    });
    return maxLength + 2;
}

function print_ingredients() {
    horizontal_line();
    process.stdout.write('| Ingredient');
    for (let i = 0; i < firstColumnWidth - 9; i++) {
        process.stdout.write(' ');
    }
    process.stdout.write('| Needs cooling | In stock |\n');
    horizontal_line();

    ingredients.forEach(function (element) {
        process.stdout.write('| ' + Object.keys(element)[0]);
        horizontal_whitespace(firstColumnWidth - (1 + Object.keys(element)[0].length));

        process.stdout.write('| ' + element.needs_cooling);
        horizontal_whitespace(secondColumnWidth - (1 + element.needs_cooling.length));

        process.stdout.write('| ' + element[Object.keys(element)[0]]);
        horizontal_whitespace(secondColumnWidth - (1 + element[Object.keys(element)[0]].length));
        
        process.stdout.write('\n');
    });

    horizontal_line();
}

function horizontal_line() {
    process.stdout.write('+');
    for (let i = 0; i < firstColumnWidth; i++) {
        process.stdout.write('-');
    }
    process.stdout.write('+---------------+----------+\n');
}

function horizontal_whitespace(x) {
    for (let i = 0; i < x; i++) {
        process.stdout.write(' ');
    }
}

console.log(Object.keys(ingredients[0])[0].length);
console.log(firstColumnWidth);
print_ingredients();
