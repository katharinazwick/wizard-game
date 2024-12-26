import {getPeople} from "./state.js";

export function generateNameFields() {
    const numberOfPeople= getPeople()
    const namesForm = document.getElementById("namesForm");

    const wrapper = document.createElement("div");
    wrapper.style.marginBottom = "20px";

    namesForm.replaceChildren();

    for (let i = 1; i <= numberOfPeople; i++) {
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = `name-${i}`;
        nameInput.placeholder = `name-${i}`
        nameInput.size = 15

        namesForm.appendChild(nameInput);
    }

    namesForm.appendChild(wrapper);
}