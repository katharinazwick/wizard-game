import {calculateResult} from "./calculateResult.js";
import {calculateFinalResult} from "./calculateFinalResult.js";


export function outputResult() {
    const finalResult = calculateFinalResult();
    const outputFinalResult = document.getElementById("outputResult");

    if (outputFinalResult) {
        outputFinalResult.textContent = `final Result is: ${finalResult.join(" ")}`;
    }
}

const logbutton = document.getElementById("logbutton");

if(logbutton){
    logbutton.addEventListener("click", outputResult);
}