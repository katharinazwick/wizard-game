import {getCurrentRound} from "./state.js";


export function outputSequence() {
    const newPeople = getCurrentRound();
    const outputSequence = document.getElementById("outputSequence");

    if (outputSequence) {
        outputSequence.textContent = `the next sequence is ${newPeople(" ")}`;
    }
}

const logButtonSequence = document.getElementById("logButtonSequence");

if(logButtonSequence){
    logButtonSequence.addEventListener("click", outputSequence);
}