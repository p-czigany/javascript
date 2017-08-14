const list = document.querySelector('.asteroids');

// Remove the king from the list.
list.removeChild(document.querySelector('li'));

/**
 * Add list items that have the following text contents:
 * ['apple', 'bubble', 'cat', 'green fox']
 */
const contentList = ['apple', 'bubble', 'cat', 'green fox'];
const addToList = function addToListFunction() {
  contentList.forEach((elem) => {
    const listElement = document.createElement('li');
    listElement.textContent = elem;
    list.appendChild(listElement);
  });
};

addToList();
