/**
 * On the click of the button,
 * Count the items in the list
 * And display the result in the result element.
 */
const button = document.querySelector('button');
const list = document.querySelectorAll('ul li');
const countList = function countListFunction() {
  document.querySelector('.result').textContent = list.length;
};
button.addEventListener('click', countList);
