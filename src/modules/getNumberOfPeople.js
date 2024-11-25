import {setPeople} from './state.js';
import {generateInputFields} from './generateInputFields.js';
import {generateNameFields} from "./generateNameFields.js";

export function numberOfPeopleEventHandler(event) {
    //const input = event.target;
    //const formNumberOfPeople = new FormData(input.form);
    // const numberOfPeople = formNumberOfPeople.get("numberOfPeopleEventHandler");
    setPeople(event.target.value);
    generateNameFields();
    generateInputFields();
}