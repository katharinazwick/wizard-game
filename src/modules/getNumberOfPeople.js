import {setPeople} from './state.js';

export function numberOfPeople(event) {
    const input = event.target;
    const formNumberOfPeople = new FormData(input.form);
    const numberOfPeople = formNumberOfPeople.get("numberOfPeople");
    setPeople(numberOfPeople);
    console.log(numberOfPeople);
    return numberOfPeople;
}