import {getPeople} from "./state.js";

export function generateNameFields() {
    const numberOfPeople= getPeople()
    const namesForm = document.getElementById("namesForm");
namesForm.className = "nameField"

    namesForm.replaceChildren();

const divLine = document.createElement("div");
divLine.id = "containerInputs2";

        for (let i = 1; i <= numberOfPeople; i++) {
            const divRound = document.createElement("div");
            divRound.id = "child11";

            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.name = `name-${i}`;
            nameInput.placeholder = `name-${i}`
            nameInput.size = 15
            //nameInput.style.border = "2px solid black";
            //nameInput.style.margin ="0 10px"
            //nameInput.style.padding = "2px 2px"
            //nameInput.style.borderRadius = "4px";
            divRound.appendChild(nameInput);
            divLine.appendChild(divRound);
        }

        const divFinish = document.createElement("div");
        divFinish.id = "child21";
    namesForm.appendChild(divLine);
       namesForm.appendChild(divFinish);
}