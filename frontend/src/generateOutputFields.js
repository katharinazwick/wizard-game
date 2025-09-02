import {getPeople} from "./state.js";

export function createOutputFields() {
    const numberOfPeople= getPeople()
    const outputResult = document.getElementById("outputResult");
    //outputResult.className = "outputField"


    outputResult.replaceChildren();

    const divLine = document.createElement("div")
    divLine.className = "containerInput";

    for (let i = 1; i <= numberOfPeople; i++) {
        const divRound = document.createElement("div");
        divRound.className = "child1";

        const output = document.createElement('div');
        output.type = 'text';
        output.innerText = `result`;
        output.id = `result-${i}`;
        Object.assign(output.style, {
            border: "1px solid grey",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            color: "grey",
            width:"20%",
        })

        const divEmpty = document.createElement("div");
        divEmpty.style.width = "5px";

        divRound.appendChild(output);
        divLine.appendChild(divRound);
        divLine.appendChild(divEmpty);
    }

    const divFinish = document.createElement("div");
    divFinish.className = "child2";

    divLine.appendChild(divFinish);
    outputResult.appendChild(divLine);
}