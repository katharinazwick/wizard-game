import {numberOfPeople} from "./getNumberOfPeople.js";
import {getTheData} from "./getTheData.js";
import {calculateFinalResult} from "./calculateFinalResult.js";
import {calculateSequence} from "./calculateSequence.js";

const numberOfPeopleForm = document.getElementById("numberOfPeopleForm");
//const numberOfPeopleInputs = document.querySelectorAll("input[name=numberOfPeople]");
const numberOfPeopleInputs= numberOfPeopleForm.querySelectorAll("input");
for (let input of numberOfPeopleInputs) {
    input.addEventListener("input", numberOfPeople);
}

const getTheDataForm = document.getElementById("getTheDataForm");
const getTheDataInputs = getTheDataForm.querySelectorAll("input");
for (let input of getTheDataInputs) {
    input.addEventListener("input", getTheData);
}

const calculateSequenceForm = document.getElementById("calculateSequenceForm");
const calculateSequenceInputs = calculateSequenceForm.querySelectorAll("input");
for (let input of calculateSequenceInputs) {
    input.addEventListener("input", calculateSequence);
}
