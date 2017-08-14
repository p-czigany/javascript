const list = document.querySelector('.asteroids');

// Remove the king from the list.
list.removeChild(document.querySelector('li'));

/**
 * Fill the list based on the following list of objects.
 * only add the asteroids to the list.
 * each list item should have its category as a class
 * and its content as text content.
 */

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

planetData.forEach((elem) => {
  if (elem.asteroid) {
    const listElement = document.createElement('li');
    listElement.textContent = elem.content;
    listElement.classList.add(elem.category);
    list.appendChild(listElement);
  }
});
