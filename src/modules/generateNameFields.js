import {getPeople} from "./state.js";

export function generateNameFields() {
    const numberOfPeople= getPeople()
    const namesForm = document.getElementById("namesForm");
namesForm.className = "nameField"

    namesForm.replaceChildren();

//const divForAll = document.createElement("divForAll")
  //  {
        for (let i = 1; i <= numberOfPeople; i++) {
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.name = `name-${i}`;
            nameInput.placeholder = `name-${i}`
            nameInput.size = 15
            //nameInput.style.border = "2px solid black";
            //nameInput.style.margin ="0 10px"
            //nameInput.style.padding = "2px 2px"
            //nameInput.style.borderRadius = "4px";
            namesForm.appendChild(nameInput);
        }
        //divForAll.className ="divForAll"
    //}
    //namesForm.appendChild(divForAll);
}