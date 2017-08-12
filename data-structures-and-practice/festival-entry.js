let watchlist = [];
let securityAlcoholLoot = 0;
const queue = [{
  name: 'Amanda',
  alcohol: 10,
  guns: 1,
},
{
  name: 'Tibi',
  alcohol: 0,
  guns: 0,
},
{
  name: 'Dolores',
  alcohol: 0,
  guns: 1,
},
{
  name: 'Wade',
  alcohol: 1,
  guns: 1,
},
{
  name: 'Anna',
  alcohol: 10,
  guns: 0,
},
{
  name: 'Rob',
  alcohol: 2,
  guns: 0,
},
{
  name: 'Joerg',
  alcohol: 20,
  guns: 0,
}];

const putArmedOnWatchList = function putArmedOnWatchListFunction() {
  watchlist = queue
    .filter(partyGoer => partyGoer.guns > 0)
    .map(partyGoer => partyGoer.name);
};
const confiscateAlcohol = function confiscateAlcoholFunction() {
  for (let i = 0; i < queue.length; i += 1) {
    securityAlcoholLoot += queue[i].alcohol;
    queue[i].alcohol = 0;
  }
};
const securityCheck = function securityCheckFunction() {
  return queue
    .filter(partyGoer => partyGoer.alcohol === 0 && partyGoer.guns === 0)
    .map(partyGoer => partyGoer.name);
};

putArmedOnWatchList();
confiscateAlcohol();

console.log('Can enter:', securityCheck());
console.log('Security alcohol loot:', securityAlcoholLoot);
console.log('Watchlist:', watchlist);
