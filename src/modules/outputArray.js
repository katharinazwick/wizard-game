import {calculateFinalResult} from "./calculateFinalResult.js";

//das hier funktioniert aktuell nicht
export function outputResult() {
    const finalResult = calculateFinalResult();
    const outputFinalResult = document.getElementById("submitRoundEventHandler");

    if (outputFinalResult) {
        outputFinalResult.textContent = `final Result is: ${finalResult.join(" ")}`;
    }
}

const logbutton = document.getElementById("logbutton");

if(logbutton){
    logbutton.addEventListener("click", outputResult);
}