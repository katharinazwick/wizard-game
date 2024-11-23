import {calculateResult} from "./calculateResult.js";
import {datasForGame} from "./datasForGame.js";
import {getPeople} from "./sharedState.js";

export function calculateFinalResult() {
    const result = calculateResult();
    const {forecast, reached} = datasForGame();
    const people = getPeople();

    /*const form = event.target;
    const formButton = new FormData(form);*/
   /* const input = event.target;
    const formprobe = new FormData(input.form);
    const probe = formprobe.get("probe");*/

    const finalResult = []; //finalResult mit 0en füllen
    for (let i = 0; i < people; i++) {
        finalResult.push(0);
    }

    for (let k = 0; k < people; k++) { //finalResult ausrechnen
        for (let i = 0; i < forecast[0].length; i++) {
            finalResult[k] = finalResult[k] + result[k][i];
        }
    }
    console.log("finalResult:", finalResult);
    const ausgabeElement = document.getElementById("outputArrayFinalResult");
    ausgabeElement.textContent = `final Result is: ${finalResult}`;
    return finalResult
}

/*const finalResult = calculateFinalResult();

const button = document.getElementById('logButton');
button.addEventListener('click', () => {
    console.log(finalResult);
});*/
