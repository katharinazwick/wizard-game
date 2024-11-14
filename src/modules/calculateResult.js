//schleife durch forEach tauschen!!!!!!!!!!!!!!

import {data} from "./data.js";

export function calculateResult() {
    const {persons, forecast, reached} = data();
    const pointsForStich = 10;
    const pointsForForecast = 20; //20 points bei forecast = reached
    const result = new Array(persons)
    for (let i = 0; i < persons; i++) {
        result[i] = [];
    }

    /*array.forEach((n) => {
        console.log(n * 2)
    });*/

    for (let k = 0; k < persons; k++) {
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
    return result;
}

//console.log(calculateResult())