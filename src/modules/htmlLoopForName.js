//import {getPeople} from "./sharedState";

const people = 3//getPeople();
const nameForm = document.getElementById("name");


for (let i = 1; i <= people; i++) {
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = `person${i}`;
    nameInput.placeholder = `person${i}`
    nameInput.size = 15

    nameForm.appendChild(nameInput);
}


