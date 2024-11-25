import {numberOfPeopleEventHandler} from "./getNumberOfPeople.js";
import {calculateSequence} from "./calculateSequence.js";
import {createNewRoundEventHandler} from "./createNewRoundEventHandler.js";

const numberOfPeopleInputs = document.querySelectorAll("input[name=numberOfPeople]");
//console.log(numberOfPeopleInputs)
for (let input of numberOfPeopleInputs) {
    input.addEventListener("input", numberOfPeopleEventHandler);
}

const calculateSequenceForm = document.getElementById("calculateSequenceForm");
const calculateSequenceInputs = calculateSequenceForm.querySelectorAll("input");
for (let input of calculateSequenceInputs) {
    input.addEventListener("input", calculateSequence);
}

const newRoundButton = document.getElementById("newRound");
newRoundButton.addEventListener("click", createNewRoundEventHandler)