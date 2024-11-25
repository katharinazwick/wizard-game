/*export let state = {
    numberOfPeople: 2,
    newPeople: 1,
    players: [
    ]
}*/


let numberOfPeople = 2;

export function setPeople(value) {
    numberOfPeople = parseInt(value, 10);
}

export function getPeople() {
    return numberOfPeople;
}


let storedData = [];

export function setTheData(data) {
    storedData = data;
}

export function getTheData() {
    return storedData;
}

let newPeople = 1;

export function setCurrentRound(value) {
    newPeople = value;
}

export function getCurrentRound() {
    return newPeople;
}
