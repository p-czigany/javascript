
const ingredients = [{
  vodka: 1,
  needs_cooling: true,
},
{
  coffee_liqueur: 0,
  needs_cooling: true,
},
{
  fresh_cream: 1,
  needs_cooling: true,
},
{
  captain_morgan_rum: 2,
  needs_cooling: true,
},
{
  mint_leaves: 0,
  needs_cooling: false,
},
{
  sugar: 100,
  needs_cooling: false,
},
{
  lime_juice: 10,
  needs_cooling: true,
},
{
  soda: 100,
  needs_cooling: true,
}];

const firstColumnWidth = function firstColumnWidthFunction() {
  let maxLength = 10;
  ingredients.forEach((element) => {
    const currentLength = Object.keys(element)[0].length;
    maxLength = (currentLength > maxLength) ? currentLength : maxLength;
  });
  return maxLength + 2;
};

const columnWidth = [firstColumnWidth(), 15, 10];

const horizontalLine = function horizontalLineFunction() {
  process.stdout.write('+');
  for (let i = 0; i < columnWidth[0]; i += 1) {
    process.stdout.write('-');
  }
  process.stdout.write('+---------------+----------+\n');
};

const horizontalWhitespace = function horizontalWhitespaceFunction(x) {
  for (let i = 0; i < x; i += 1) {
    process.stdout.write(' ');
  }
};

const headline = function headlineFunction() {
  process.stdout.write('| Ingredient');
  horizontalWhitespace(columnWidth[0] - 11);
  process.stdout.write('| Needs cooling | In stock |\n');
};

const drawCell = function drawCellFunction(index, content) {
  process.stdout.write('| ');
  process.stdout.write(content.toString());
  horizontalWhitespace(columnWidth[index] - (1 + content.toString().length));
};

const drawSingleRow = function drawSingleRowFunction(element) {
  drawCell(0, Object.keys(element)[0]);
  drawCell(1, element.needs_cooling);
  drawCell(2, element[Object.keys(element)[0]]);
  process.stdout.write('|\n');
};

const drawRows = function drawRowsFunction() {
  ingredients.forEach((element) => {
    drawSingleRow(element);
  });
};

const printIngredients = function printIngredientsFunction() {
  horizontalLine();
  headline();
  horizontalLine();
  drawRows();
  horizontalLine();
};

console.log(columnWidth);
printIngredients();
