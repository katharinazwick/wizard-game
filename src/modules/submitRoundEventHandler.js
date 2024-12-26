import {setPlayer} from "./state.js";
import {generateInputFields} from "./generateInputFields.js"
//hier werden die Inputs ausgelesen und das intermediatResult berechnet
// und in ein verschachteltes Objekt getan
//!!!!!!soll der Name so bleiben??!!!!!!!!!!!
//!!!!!!!!!!!wäre es nicht schlauer das objekt im rahmen der namen zu erstellen???!!!!!!!

export function submitRoundEventHandler(event) {
    event.preventDefault();

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
        if (player[key].forecast === player[key].reached) {
            player[key].intermediateResult = pointsForForecast + pointsForStich * player[key].reached;
            continue;
        }
        const pointsForWrong = Math.abs((player[key].forecast - player[key].reached) * 10);
        player[key].intermediateResult = pointsForStich * player[key].reached - pointsForWrong;
    }
    console.log("player",player);
    setPlayer(player);
    return player;
}

/*export function setPlayer(player) {
    return player;
}*/
    /*player{
    // "1": {
    "forecast":
    "reached":
        }
    }*/

