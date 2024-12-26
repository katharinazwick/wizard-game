let gameState = [];
let numberOfPeople = 0;

let numberOfRounds = 0;

let newPeople = 1;

let player = [];

//soll das so bleiben weil die daten ja jetzt in players sind
export function setPeople(value) {
    gameState = [];
    numberOfPeople = parseInt(value, 10);
    /*for (let i = 1; i <= numberOfPeople; i++) {
        gameState.push({
            name: "",
            forecast: [],
            reached: [],
            intermediateResult: [],
            finalResult: ""
        });
    }*/
    console.log(gameState);
}

export function getPeople() {
    return numberOfPeople;
}

export function increaseNumberOfRound(){
    numberOfRounds += 1;
}

export function getNumberOfRound(){
    return numberOfRounds;
}

export function setCurrentRound(value) {
    newPeople = value;
}

export function getCurrentRound() {
    return newPeople;
}

export function setPlayer(data){
    player = {...data};
    console.log(player);
}

export function getplayer () {
    return player;
}