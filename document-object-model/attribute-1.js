const picture = document.getElementsByTagName('img')[0];
const button2 = document.getElementsByClassName('this-one')[0];

// Write the image's url to the console.
console.log(picture.getAttribute('src'));

// Replace the image with a picture of yourself.
picture.setAttribute('src', 'https://avatars1.githubusercontent.com/u/23168669?v=4');

// Make the link point to the Green Fox Academy website.
document.getElementsByTagName('a')[0].setAttribute('href', 'https://www.greenfoxacademy.com');

// Disable the second button.
button2.setAttribute('disabled', 'true');

// Replace its text with 'Don't click me!'.
button2.textContent = 'Don\'t click me!';
