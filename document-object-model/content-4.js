// replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']

const filling = ['apple', 'banana', 'cat', 'dog'];
const list = document.querySelectorAll('body ul li');

for (let i = 0; i < list.length; i += 1) {
  list[i].textContent = filling[i];
}
