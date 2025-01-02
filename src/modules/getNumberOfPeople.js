import {setPeople} from './state.js';
import {generateInputFields} from './generateInputFields.js';
import {generateNameFields} from "./generateNameFields.js";
import {createOutputFields} from "./generateOutputFields.js";

export function numberOfPeopleEventHandler(event) {
    //const input = event.target;
    //const formNumberOfPeople = new FormData(input.form);
    // const numberOfPeople = formNumberOfPeople.get("numberOfPeopleEventHandler");

    setPeople(event.target.value);
    generateNameFields();
    generateInputFields();
    createOutputFields();

    const layout = document.getElementById("startText");
    layout.style.display = "none";
}