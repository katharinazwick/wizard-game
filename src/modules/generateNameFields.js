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
        Object.assign(nameInput.style, {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            textAlign: "center",
            width:"33.33%",
            borderRadius:"0px"
        })
        //name inputs sind nicht 100% mittig?

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