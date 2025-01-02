import {getNumberOfRound, getPeople} from './state.js';
import {createObjectWithFaR} from "./createObjectWithFaR.js";
import {createNewRoundEventHandler} from "./createNewRoundEventHandler.js";
import {calculateSequence} from "./calculateSequence.js";

export function generateInputFields(event) {
    const numberOfPeople = getPeople();
    const round = getNumberOfRound();
    const getTheDataForm = document.getElementById("getTheDataForm");
    const form = document.createElement("form");
    form.className = "inputField";
    form.id = `form-${round}`;

    const divLine = document.createElement("div")
    divLine.className = "containerInput";

    let count = getNumberOfRound();
    if (count % 3 === 0) {
        const enter = document.createElement("p");
        form.appendChild(enter);
    }

    for (let i = 1; i <= numberOfPeople; i++) {
        const divRound = document.createElement("div");
        divRound.className = "child1";

        const forecastInput = document.createElement('input');
        forecastInput.type = 'text';
        forecastInput.name = `forecast-${round}-${i}`;
        forecastInput.placeholder = `forecast`
        //forecastInput.size = 8;
        Object.assign(forecastInput.style, {
            border: "1px solid grey",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            width: "33.33%",
            flexWrap: "nowrap",
        });


        const reachedInput = document.createElement('input');
        reachedInput.type = 'text';
        reachedInput.name = `reached-${round}-${i}`;
        reachedInput.placeholder = `reached`
        //reachedInput.size = 8;
        Object.assign(reachedInput.style, {
            border: "1px solid grey",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            width: "33.33%",
            flexWrap: "nowrap",
        });

        const resultDiv = document.createElement('div');
        resultDiv.id = `result-${round}-${i}`;
        resultDiv.innerText = "result";
        Object.assign(resultDiv.style, {
            border: "1px solid grey",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            color: "grey",
            width: "33.33%",
        });
        //resultDiv.style.background = "white";
        //resultDiv.style.height = "18px"

        const divEmpty = document.createElement("div");
        divEmpty.style.width = "5px";

        divRound.appendChild(forecastInput);
        divRound.appendChild(reachedInput);
        divRound.appendChild(resultDiv);
        divLine.appendChild(divRound);
        divLine.appendChild(divEmpty);
    }

    const divFinish = document.createElement("div");
    divFinish.className = "child2";

    const finishCurrentRoundButton = document.createElement('button');
    finishCurrentRoundButton.innerText = 'finish';
    finishCurrentRoundButton.id ="finish"
    //finishCurrentRoundButton.disabled = true;
    finishCurrentRoundButton.type = "submit";
    Object.assign(finishCurrentRoundButton.style, {
        border: "1px solid grey",
    })
    //"rgba(30,40,35,0.8)";

    divFinish.appendChild(finishCurrentRoundButton);

    divLine.appendChild(divFinish);

    form.appendChild(divLine);

    form.addEventListener("submit", (event) => {
    try {
        //form.addEventListener('submit', calculateSequence);
        createObjectWithFaR(event);
        createNewRoundEventHandler(event);
        deleteFinish(event);
        calculateSequence(event);
    } catch (error) {
        console.error(error);
    }
    });

    function deleteFinish() {
        finishCurrentRoundButton.style.display = "none";
    }

    getTheDataForm.appendChild(form);
}