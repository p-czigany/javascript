// Turn the party on and off by clicking the button.
const button = document.querySelector('button');
const body = document.querySelector('body');
const switchParty = function switchPartyFunction() {
  if (body.classList.contains('party')) {
    body.classList.remove('party');
  } else {
    body.classList.add('party');
  }
};
button.addEventListener('click', switchParty);
