import {getPeople} from "./state.js";

export function generateNameFields() {
    const numberOfPeople = getPeople()
    const namesForm = document.getElementById("namesForm");
    namesForm.className = "nameField"

    namesForm.replaceChildren();

    const divLine = document.createElement("div");
    divLine.className = "containerInput";

    for (let i = 1; i <= numberOfPeople; i++) {
        const divRound = document.createElement("div");
        divRound.className = "child1";

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = `name-${i}`;
        nameInput.placeholder = `name`
        nameInput.className = "nameInput"
        Object.assign(nameInput.style, {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "nowrap",
            textAlign: "center",
            width:"40%",
            border: "1px solid grey",
            borderRadius:"0px"
        })

        const divEmpty = document.createElement("div");
        divEmpty.style.width= "5px";

        divRound.appendChild(nameInput);
        divLine.appendChild(divRound);
        divLine.appendChild(divEmpty);
    }

    const divFinish = document.createElement("div");
    divFinish.className = "child2";

    divLine.appendChild(divFinish);
    namesForm.appendChild(divLine);
}