'use strict';

var watchlist = [];

var security_alcohol_loot = 0;

var queue = [
    { 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
    { 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
    { 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
    { 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
    { 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
    { 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
    { 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
];

function put_armed_on_watchlist() {
    watchlist = queue.filter(partyGoer => partyGoer.guns > 0)
        .map(function (partyGoer) { return partyGoer.name; });
}

function confiscate_alcohol() {
    for (var partyGoer of queue) {
        security_alcohol_loot += partyGoer.alcohol;
        partyGoer.alcohol = 0;
    }
}

function security_check() {
    return queue.filter(partyGoer => partyGoer.alcohol == 0 && partyGoer.guns == 0)
        .map(function (partyGoer) { return partyGoer.name; });
}

put_armed_on_watchlist();
confiscate_alcohol();
console.log("Can enter:", security_check(queue));
console.log("Security alcohol loot:", security_alcohol_loot);
console.log("Watchlist:", watchlist);
