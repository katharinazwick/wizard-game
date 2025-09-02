window.gameState = [];
let numberOfPeople = 0;
window.nameOfThePeople = [];

let numberOfRounds = 0;

window.player = [];

window.finalResult = [];

export function setPeople(value) {
    window.gameState = [];
    numberOfPeople = parseInt(value, 10);
    if (numberOfPeople>6 || numberOfPeople <= 1 || isNaN(numberOfPeople)) {
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