const king = document.getElementById('b325');
const conceited = document.getElementsByClassName('b326')[0];
const businessLamp = document.getElementsByClassName('big');
const conceitedKing = document.querySelectorAll('section.container div');
const noBusiness = document.getElementsByTagName('div');
const allBizniss = document.getElementsByTagName('p')[0];

console.log(king);
alert(conceited.innerHTML);
Array.from(businessLamp).forEach((elem) => {
  console.log(elem);
});
Array.from(conceitedKing).forEach((elem) => {
  alert(elem.innerHTML);
});
Array.from(noBusiness).forEach((elem) => {
  console.log(elem);
});
alert(allBizniss.innerHTML);
