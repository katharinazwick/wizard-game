import {calculateSequence} from "./calculateSequence.js";

export function outputRound() {
    const newpeople = calculateSequence();
    const outputNP = document.getElementById("round");

    outputNP.textContent = `your sequence is: ${newpeople}`;
}

window.outputRound = outputRound;