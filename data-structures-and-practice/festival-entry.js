'use strict';

var watchlist = []

var security_alchol_loot = 0

var queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

function security_check(listOfPartyGoers) {
    return listOfPartyGoers.filter(partyGoer => partyGoer.alcohol === 0 && partyGoer.guns === 0);
}

console.log(security_check(queue));
