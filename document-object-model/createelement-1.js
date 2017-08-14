// Add an item that says 'The Green Fox' to the asteroid list.
const greenFoxListElement = document.createElement('li');
greenFoxListElement.textContent = 'The Green Fox';
document.querySelector('body ul').appendChild(greenFoxListElement);

// Add an item that says 'The Lamplighter' to the asteroid list.
const lamplighterListElement = document.createElement('li');
lamplighterListElement.textContent = 'The Lamplighter';
document.querySelector('body ul').appendChild(lamplighterListElement);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
const iCanAddHeadingElement = document.createElement('h1');
iCanAddHeadingElement.textContent = 'I can add elements to the DOM!';
document.querySelector('.container').appendChild(iCanAddHeadingElement);

// Add an image, any image, to the container.
const imageElement = document.createElement('img');
imageElement.setAttribute('src', 'https://avatars1.githubusercontent.com/u/23168669?v=4');
document.querySelector('.container').appendChild(imageElement);
