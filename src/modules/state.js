window.gameState = [];
let numberOfPeople = 0;
window.nameOfThePeople = [];

let count = 0;

let numberOfRounds = 0;

window.player = [];

window.finalResult = [];

//soll das so bleiben weil die daten ja jetzt in players sind
export function setPeople(value) {
    window.gameState = [];
    numberOfPeople = parseInt(value, 10);
    if (numberOfPeople>4 || numberOfPeople <= 0 || isNaN(numberOfPeople)) {
        throw ("wrong Input");
    }
    for (let i = 1; i <= numberOfPeople; i++) {
        window.gameState.push({
            name: "",
            forecast: [],
            reached: [],
            intermediateResult: [],
            finalResult: 0
        });
    }

}

export function setGameState (data){
    window.gameState = [...data];
}

export function getPeople() {
    return numberOfPeople;
}

export function getGameState() {
    return window.gameState;
}

export function setNameOfThePeople(data){
    window.nameOfThePeople = [...data];
}

export function getNameOfThePeople() {
    return window.nameOfThePeople;
}

export function increaseNumberOfRound(){
    numberOfRounds += 1;
}

export function getNumberOfRound(){
    return numberOfRounds;
}

export function setPlayer(data){
    window.player = {...data};
}

export function getplayer () {
    return window.player;
}

export function setResult (data) {
    window.Result = [...data];
}

export function getResult() {
    return window.Result;
}