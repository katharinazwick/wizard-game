import {datasForGame} from "./datasForGame.js";
import {pointsForGame} from "./pointsForGame.js";
import {numberOfPeople} from "./numberOfPeople.js";
import {calculateResult} from "./calculateResult.js";
import {calculateFinalResult} from "./calculateFinalResult.js";
import {calculateSequence} from "./calculateSequence.js";
import {roundForGames} from "./roundForGames.js";
import {outputRound} from "./outputRound.js";
//import {calculateResultOutPut} from "./calculateResultOutPut.js";

const numberOfPeopleForm = document.getElementById("numberOfPeopleForm");
//const numberOfPeopleInputs = document.querySelectorAll("input[name=numberOfPeople]");
const numberOfPeopleInputs= numberOfPeopleForm.querySelectorAll("input");
for (let input of numberOfPeopleInputs) {
    input.addEventListener("input", numberOfPeople);
}

const pointsForGameForm = document.getElementById("pointsForGameForm");
const pointsForGameinputs = pointsForGameForm.querySelectorAll("input");
for (let input of pointsForGameinputs) {
    input.addEventListener("input", pointsForGame);
}

const calculateSequenceForm = document.getElementById("calculateSequenceForm");
const calculateSequenceInputs= calculateSequenceForm.querySelectorAll("input");
for (let input of calculateSequenceInputs) {
    input.addEventListener("input", roundForGames);
}

/*const probe = document.getElementById("probe");
const probeInputs = probe.querySelectorAll("input");
for (let input of probeInputs) {
    input.addEventListener("input", calculateFinalResult);
}*/

/*const buttonForm = document.getElementById("buttonForm");
for (let element of buttonForm) {
    element.addEventListener("submit", calculateFinalResult);
}*/








