import {calculateResult} from "./calculateResult.js";
import {data} from "./data.js";

function calculateFinalResult() {
    const result = calculateResult();
    const {persons, forecast} = data();

    let finalResult = []; //finalResult mit 0en füllen
    for (let i = 0; i<persons; i++) {
        finalResult.push(0);
    }

    for (let k = 0; k < persons; k++) { //finalResult ausrechnen
        for (let i = 0; i < forecast[0].length; i++) {
            finalResult[k] = finalResult[k] + result[k][i]
        }
    }
    return finalResult
}

//console.log(calculateFinalResult())