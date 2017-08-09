'use strict';

var accounts = [
    { 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
    { 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
    { 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

function nameAndBalance(accounts, accountNumber) {
    var chosenAccounts = accounts.filter(account => account.account_number === accountNumber);
    var namesAndBalances = [];
    for (let currentAccount of chosenAccounts) {
        namesAndBalances.splice(nameAndBalance.length, 0, { 'client_name': currentAccount.client_name, 'balance': currentAccount.balance });
    }
    return namesAndBalances[0];
}

function transfer(accounts, senderAccountNumber, receiverAccountNumber, amount) {
    var senderAccount = accounts.filter(account => account.account_number === senderAccountNumber)[0];
    var receiverAccount = accounts.filter(account => account.account_number === receiverAccountNumber)[0];
    if (senderAccount === null || senderAccount === undefined || receiverAccount === null || receiverAccount === undefined) {
        console.log("404 - account not found");
        return;
    }
    senderAccount.balance -= amount;
    receiverAccount.balance += amount;
}

console.log(nameAndBalance(accounts, 43546731));

transfer(accounts, 11234543, 43546731, 4099.2);

console.log(accounts);
