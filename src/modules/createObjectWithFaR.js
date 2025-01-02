import {getGameState, getNumberOfRound, setGameState, setPlayer} from "./state.js";

//hier werden die Inputs ausgelesen und das intermediatResult berechnet

export function createObjectWithFaR(event) {
    event.preventDefault();

    const gameState = getGameState();
    const round = getNumberOfRound();

    const pointsForStich = 10;
    const pointsForForecast = 20; //20 points bei forecast = reached
    const player = {};

    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {//forecast-0-1, 123
        value = parseInt(value);
        const splitKey = key.split("-",); //[forecast,0,1]
        let originalPlayerStateObject = player[splitKey[2]];

        if (!originalPlayerStateObject) {
            originalPlayerStateObject = {}
        } //wozu??

        if (!value) {
            throw ("missing Input")
        }

        if (key.startsWith("forecast")) {
            originalPlayerStateObject.forecast = value;
            player[splitKey[2]] = originalPlayerStateObject;
            continue;
        }
        originalPlayerStateObject.reached = value; // {reached: 43, forecast: 32}
        player[splitKey[2]] = originalPlayerStateObject;
    }

    for (let key in player) {
        let temp = null;
        if (player[key].forecast === player[key].reached) {
            player[key].intermediateResult = pointsForForecast + pointsForStich * player[key].reached;
        } else {
            const pointsForWrong = Math.abs((player[key].forecast - player[key].reached) * 10);
            player[key].intermediateResult = pointsForStich * player[key].reached - pointsForWrong;
        }
        gameState[key - 1].forecast.push(player[key].forecast);
        gameState[key - 1].reached.push(player[key].reached);
        temp = gameState[key - 1].intermediateResult
        temp.push(player[key].intermediateResult);

        const outputSequence = document.getElementById(`result-${round}-${key}`);

        if (outputSequence) {
            outputSequence.innerText = player[key].intermediateResult;
        }
    }

    setPlayer(player);
    setGameState(gameState);

    /*for (let i in player) {
        const outputSequence = document.getElementById(`result-${round}-${i}`);

        if (outputSequence) {
            outputSequence.innerText = player[i].intermediateResult;
        }
    }*/

    return {player, gameState};
}

