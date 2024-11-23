import {calculateFinalResult} from "./calculateFinalResult.js";
import {calculateResult} from "./calculateResult.js";

function outputArrayResult (){
    const result = calculateResult();
    const outputArrayRes = document.getElementById("outputArrayResult");

    outputArrayRes.textContent = `result is: ${result.join(", ")}`;
}

function outputArrayFinalResult() {
    const finalResult = calculateFinalResult();
    const outputArrayFinalRes = document.getElementById("outputArrayFinalResult");

    // Array als Text ausgeben
    outputArrayFinalRes.textContent = `final Result is: ${finalResult.join(", ")}`;
}

window.outputArrayResult = outputArrayResult;
window.outputArrayFinalResult = outputArrayFinalResult;
