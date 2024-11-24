import {getPeople} from './state.js';

const numberOfPeople = getPeople();
const round = 4;
const getTheDataForm = document.getElementById("getTheDataForm");

const wrapper = document.createElement("div");
wrapper.style.marginBottom = "20px";

for (let i = 1; i <= numberOfPeople; i++) {
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = `person${i}`;
    nameInput.placeholder = `person${i}`
    nameInput.size = 15

    getTheDataForm.appendChild(nameInput);
}

getTheDataForm.appendChild(wrapper);

for (let p =1; p<=round;p++) {
    for (let i = 1; i <= numberOfPeople; i++) {
        const forecastInput = document.createElement('input');
        forecastInput.type = 'text';
        forecastInput.name = `forecast${i}${p}`;
        forecastInput.placeholder = `forecast${i}${p}`
        forecastInput.size = 7;

        const reachedInput = document.createElement('input');
        reachedInput.type = 'text';
        reachedInput.name = `reached${i}${p}`;
        reachedInput.placeholder = `reached${i}${p}`
        reachedInput.size = 7;

        getTheDataForm.appendChild(forecastInput);
        getTheDataForm.appendChild(reachedInput);

    }
    //const lineBreak = document.createElement("br");
    const wrapper = document.createElement("div");
    wrapper.style.marginBottom = "20px";
    getTheDataForm.appendChild(wrapper);
}
