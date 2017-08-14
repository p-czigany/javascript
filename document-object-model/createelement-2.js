const list = document.getElementsByClassName('asteroids')[0];

// Remove the king from the list.
list.removeChild(document.getElementsByTagName('li')[0]);

// Add 3 list items saying 'The Fox' to the list.
for (let i = 0; i < 3; i += 1) {
  const fox = document.createElement('li');
  fox.textContent = 'The Fox';
  list.appendChild(fox);
}
