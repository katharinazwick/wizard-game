import {setPeople} from './state.js';
import {generateInputFields} from './generateInputFields.js';
import {generateNameFields} from "./generateNameFields.js";
import {createOutputFields} from "./generateOutputFields.js";

export function numberOfPeopleEventHandler(event) {
    //const input = event.target;
    //const formNumberOfPeople = new FormData(input.form);
    // const numberOfPeople = formNumberOfPeople.get("numberOfPeopleEventHandler");
    setPeople(event.target.value);
    //setPeople(2)
    generateNameFields();
    generateInputFields();
    createOutputFields();
}