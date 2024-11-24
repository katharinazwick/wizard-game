import {calculateResult} from "./calculateResult";


function outputResult() {
    const theData = calculateResult();
    const outputRes = document.getElementById("outputResult");

    // Array als Text ausgeben
    outputRes.textContent = `final Result is: ${theData.join(", ")}`;
}

window.outputResult = outputResult;
