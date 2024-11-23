import {getPeople, getReached} from './sharedState.js';
import {fcData} from "./sharedState.js";

//import {pointsForGame} from "./pointsForGame.js";

export function datasForGame() {
    const people = getPeople();
    const rdData = getReached();

    /*
    {
       personName: "Manfred",
       email: "manfred@manfred.com",
       guesses: [
          1, 2, 3,
       ]
    }
     */
    const forecast = new Array(people); //Array generieren -> [undefined, undefined, undefined] wenn people = 3
    const reached = new Array(people); //Array generieren

    for (let i = 0; i < people; i++) {
        forecast[i] = [];
        reached[i] = [];
        for (let p = 0; p < 4; p++) {
            /*if (!fcData[p][i]) {
                forecast[i].push(0);
                reached[i].push(0);
                //debugger;
            }*/
            if (isNaN(forecast[i])) {
                ///////////
            } else if (i === 0) {
                forecast[i].push(fcData[p][i]);
                reached[i].push(rdData[p][i]);
            } else if (i === 1) {
                forecast[i].push(fcData[p][i]);
                reached[i].push(rdData[p][i]);
            } else if (i === 2) {
                forecast[i].push(fcData[p][i]);
                reached[i].push(rdData[p][i]);
            } else if (i === 3) {
                forecast[i].push(fcData[p][i]);
                reached[i].push(rdData[p][i]);
            }
        }
    }
    console.log("forecast:", forecast, "reached:", reached);
    return {forecast, reached};
}