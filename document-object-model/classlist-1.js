/**
 * Does the third p have a cat class?
 * If so, alert 'YEAH CAT!'
 */
if (document.getElementsByTagName('p')[2].classList.contains('cat')) {
  alert('YEAH CAT!');
}

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
if (document.getElementsByTagName('p')[3].classList.contains('dolphin')) {
  document.getElementsByClassName('apple')[0].textContent = 'pear';
}

// If the first p has an 'apple' class, replace cat's content with 'dog'
if (document.getElementsByTagName('p')[0].classList.contains('apple')) {
  document.getElementsByClassName('cat')[0].textContent = 'dog';
}

// Make apple red
document.getElementsByClassName('apple')[0].classList.add('red');

// Make balloon less balloon-like
document.getElementsByClassName('balloon')[0].classList.remove('balloon');
