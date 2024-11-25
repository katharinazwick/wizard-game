/*export let state = {
    numberOfPeopleEventHandler: 2,
    newPeople: 1,
    players: [
    ]
}*/

let gameState = [];
let numberOfPeople = 0;
let numberOfRounds = 0;


export function setPeople(value) {
    gameState = [];
    numberOfPeople = parseInt(value, 10);
    for (let i = 1; i <= numberOfPeople; i++) {
        gameState.push({
            name: "",
            forecast: [],
            reached: [],
            result: [],
            finalResult: ""
        });
    }
    console.log(gameState);
}

export function getPeople() {
    return numberOfPeople;
}

export function getGameState() {
    return gameState;
}

export function increaseNumberOfRound(){
    numberOfRounds += 1;
}

export function getNumberOfRound(){
    return numberOfRounds;
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
