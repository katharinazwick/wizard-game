//schleife durch forEach tauschen!!!!!!!!!!!!!!

import {datasForGame} from "./datasForGame.js";

export function calculateResult(event) {
    const input = event.target;
    const formprobe = new FormData(input.form);
    const probe = formprobe.get("probe");

    const {people, forecast, reached} = datasForGame();
    const pointsForStich = 10;
    const pointsForForecast = 20; //20 points bei forecast = reached
    const result = new Array(people)
    for (let i = 0; i < people; i++) {
        result[i] = [];
    }

    for (let k = 0; k < people; k++) {
        for (let i in forecast[k]) { //Berechnung der Punkte für 2 Fälle
            if (forecast[k][i] === reached[k][i]) {
                result[k][i] = pointsForForecast + pointsForStich * reached[k][i];
            } else {
                let pointForWrong = 0;
                pointForWrong = Math.abs((forecast[k][i] - reached[k][i]) * 10);
                result[k][i] = pointsForStich * reached[k][i] - pointForWrong
            }
        }
    }
    console.log(result)
    return {result};
}

