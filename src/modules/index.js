import {numberOfPeopleEventHandler} from "./getNumberOfPeople.js";
import {calculateSequence} from "./calculateSequence.js";
import {createNewRoundEventHandler} from "./createNewRoundEventHandler.js";
import {getName} from "./getNameOfThePlayer.js";

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

//zum Holen der namen
const getNameForm = document.getElementById("namesForm");
const getNameInputs = getNameForm.querySelectorAll("input");
for (let input of getNameInputs) {
    input.addEventListener("input", getName);
}

//zum Ausführen bei clicken des buttons
const newRoundButton = document.getElementById("newRound");
newRoundButton.addEventListener("click", createNewRoundEventHandler)