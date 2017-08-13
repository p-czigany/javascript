const heading = document.getElementsByTagName('h1')[0];
const paragraph1 = document.querySelector('p');

// 1. Alert the content of the heading.
alert(heading.textContent);

// 2. Write the content of the first paragraph to the console.
console.log(paragraph1);

// 3. Alert the content of the second paragraph.
alert(document.querySelector('p.other').textContent);

// 4. Replace the heading's content with 'New content'.
heading.textContent = 'New content';

// 5. Replace the last paragraph's content with the first paragraph's content.
document.querySelector('p.result').textContent = paragraph1.textContent;
