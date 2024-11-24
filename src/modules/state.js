/*export let state = {
    numberOfPeople: 2,
    currentRound: 1,
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
