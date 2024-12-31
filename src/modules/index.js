import {numberOfPeopleEventHandler} from "./getNumberOfPeople.js";
import {calculateSequence} from "./calculateSequence.js";
import {createNewRoundEventHandler} from "./createNewRoundEventHandler.js";
import {calculateFinalResult} from "./calculateFinalResult.js";
import {createObjectWithFaR} from "./createObjectWithFaR.js";

//zum Holen der Anzahl der Personen
const numberOfPeopleInputs = document.querySelectorAll("input[name=numberOfPeople]");
//console.log(numberOfPeopleInputs)
for (let input of numberOfPeopleInputs) {
    input.addEventListener("input", numberOfPeopleEventHandler);
}

//zum Holen der current round
const calculateSequenceForm = document.getElementById("calculateSequenceForm");
const calculateSequenceInputs = calculateSequenceForm.querySelectorAll("input");
for (let input of calculateSequenceInputs) {
    input.addEventListener("input", calculateSequence);
}

//zum Ausführen bei clicken des buttons
/*const newRoundButton = document.getElementById("newRound");
newRoundButton.addEventListener("click", createNewRoundEventHandler)*/

const logbutton = document.getElementById("logbutton");
if(logbutton){
    logbutton.addEventListener("click", calculateFinalResult);
}