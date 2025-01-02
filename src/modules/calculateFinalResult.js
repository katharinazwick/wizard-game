import {getplayer, getGameState, getNameOfThePeople} from "./State.js";
import {getName} from "./getNameOfThePlayer.js";

//erstellt das komplette Objekt mit name, forecast, reached, intermediateResult, result in einem Array

export function calculateFinalResult() {
    const player = getplayer();
    const gameState = getGameState();
    getName();
    const nameOfThePeople = getNameOfThePeople();

    for (let key in player) {
        console.log(key)
        if (nameOfThePeople[key - 1] === "") {
            gameState[key - 1].name = "person" + key;
        } else {
            gameState[key - 1].name = nameOfThePeople[key - 1]
        }
        gameState[key - 1].finalResult = 0;
        for (let i = 0; i < gameState[key-1].intermediateResult.length; i++) {
            gameState[key - 1].finalResult += gameState[key-1].intermediateResult[i];
        }
        const outputSequence = document.getElementById(`result-${key}`);

        if (outputSequence) {
            outputSequence.innerText = gameState[key-1].finalResult;
        }
    }
    return gameState;
}




