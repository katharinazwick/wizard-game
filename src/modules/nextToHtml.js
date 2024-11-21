import {numberOfPeople} from "./numberOfPeople.js";

export function createPeopleField() {
    const people = 3//numberOfPeople();
    for (let i = 1; i <= people; i++) {
        document.body.innerHTML += '<class=name>';
    }
    document.body.innerHTML;
}