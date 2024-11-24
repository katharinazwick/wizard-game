import {numberOfPeople} from "./getNumberOfPeople.js";
import {getTheData} from "./getTheData.js";
import {calculateResult} from "./calculateResult.js";

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

const outputFinalResulForm = document.getElementById("outputFinalResulForm");
for (let element of outputFinalResulForm) {
    element.addEventListener("submit", calculateResult());
}