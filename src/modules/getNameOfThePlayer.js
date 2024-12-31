import {setNameOfThePeople} from './state.js';

export function getName() {
    const form = document.getElementById("namesForm");
    const inputs = form.querySelectorAll("input[type='text']");

    const arrayTemp = [];

    for (let input of inputs) {
        const value = input.value.trim();
        arrayTemp.push(value);
    }

    setNameOfThePeople(arrayTemp);
    return arrayTemp;
}

