'use strict';

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

const columnWidth = [firstColumnWidth(), 15, 10];

function firstColumnWidth() {
    let maxLength = 10;
    ingredients.forEach(function (element) {
        const currentLength = Object.keys(element)[0].length;
        maxLength = (currentLength > maxLength) ? currentLength : maxLength;
    });
    return maxLength + 2;
}

function print_ingredients() {
    horizontal_line();

    headline();

    horizontal_line();

    draw_rows();

    horizontal_line();
}

function headline() {
    process.stdout.write('| Ingredient');
    horizontal_whitespace(columnWidth[0] - 11);
    process.stdout.write('| Needs cooling | In stock |\n');
}

function draw_cell(index, content) {
    process.stdout.write('| ' + content);
    horizontal_whitespace(columnWidth[index] - (1 + content.toString().length));
}

function draw_row(element) {
    draw_cell(0, Object.keys(element)[0]);
    draw_cell(1, element.needs_cooling);
    draw_cell(2, element[Object.keys(element)[0]]);
    process.stdout.write('|\n');
}

function draw_rows() {
    ingredients.forEach(function (element) {
        draw_row(element);
    });
}

function horizontal_line() {
    process.stdout.write('+');
    for (let i = 0; i < columnWidth[0]; i++) {
        process.stdout.write('-');
    }
    process.stdout.write('+---------------+----------+\n');
}

function horizontal_whitespace(x) {
    for (let i = 0; i < x; i++) {
        process.stdout.write(' ');
    }
}

console.log(columnWidth);
print_ingredients();
