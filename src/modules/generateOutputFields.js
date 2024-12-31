import {getPeople} from "./state.js";

export function createOutputFields() {
    const numberOfPeople= getPeople()
    const outputResult = document.getElementById("outputResult");
    //outputResult.className = "outputField"


    outputResult.replaceChildren();

    for (let i = 1; i <= numberOfPeople; i++) {
        const output = document.createElement('div');
        output.type = 'text';
        output.style.display = "inline-block" ;
        output.innerText = `result-${i}`;
        output.id = `result-${i}`;
        output.placeholder = `result-${i}`
        output.style.border = "1px solid grey";
        output.style.color= "grey"
        output.style.borderRadius = "2px";

        outputResult.appendChild(output);
    }
}