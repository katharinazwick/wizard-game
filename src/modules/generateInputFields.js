import {getNumberOfRound, getPeople} from './state.js';
import {submitRoundEventHandler} from "./submitRoundEventHandler.js";

export function generateInputFields() {
    const numberOfPeople = getPeople();
    const round = getNumberOfRound();
    const getTheDataForm = document.getElementById("getTheDataForm");

    const form = document.createElement("form");
    form.id = `form-${round}`;

    console.log(numberOfPeople);
    for (let i = 1; i <= numberOfPeople; i++) {

        const forecastInput = document.createElement('input');
        forecastInput.type = 'text';
        forecastInput.name = `forecast-${round}-${i}`;
        forecastInput.placeholder = `forecast-${round}-${i}`
        forecastInput.size = 12;

        const reachedInput = document.createElement('input');
        reachedInput.type = 'text';
        reachedInput.name = `reached-${round}-${i}`;
        reachedInput.placeholder = `reached-${round}-${i}`
        reachedInput.size = 12;

        const div = document.createElement('div');
        div.id = `result-${round}-${i}`;

        form.appendChild(forecastInput);
        form.appendChild(reachedInput);
        form.appendChild(div);
    }

    const finishCurrentRoundButton = document.createElement('button');
    finishCurrentRoundButton.innerText = 'Finish';
    finishCurrentRoundButton.type = "submit";


    form.appendChild(finishCurrentRoundButton);
    form.addEventListener('submit', submitRoundEventHandler);

    getTheDataForm.appendChild(form);

    const wrapper = document.createElement("div");
    wrapper.style.marginBottom = "20px";
    getTheDataForm.appendChild(wrapper);
    //const lineBreak = document.createElement("br");

}
