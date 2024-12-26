import {getplayer, getGameState} from "./State.js";


export function calculateFinalResult() {
    const player = getplayer();
    const gameState = getGameState();

    let temp = [];
    for (let key in player) {
        gameState[key - 1].forecast.push(player[key].forecast);
        gameState[key - 1].reached.push(player[key].reached);
        temp = gameState[key - 1].intermediateResult
        temp.push(player[key].intermediateResult);
        gameState[key - 1].result += temp[key - 1]
    }
    console.log(gameState);
    return gameState;
}




