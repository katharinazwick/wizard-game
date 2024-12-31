import {getNumberOfRound, getPeople} from './state.js';
import {createObjectWithFaR} from "./createObjectWithFaR.js";
import {createNewRoundEventHandler} from "./createNewRoundEventHandler.js";

export function generateInputFields() {
    const numberOfPeople = getPeople();
    const round = getNumberOfRound();
    const getTheDataForm = document.getElementById("getTheDataForm");
    const form = document.createElement("form");
    form.className = "inputField";
    form.id = `form-${round}`;

   // const divForAll = document.createElement("divForAll")
    //{
        for (let i = 1; i <= numberOfPeople; i++) {

            const divRound = document.createElement("div");
            {
                const forecastInput = document.createElement('input');
                forecastInput.type = 'text';
                forecastInput.name = `forecast-${round}-${i}`;
                forecastInput.placeholder = `forecast-${round}-${i}`
                forecastInput.size = 10;
                forecastInput.style.border = "2px solid black";
                forecastInput.style.margin = "0 10px"
                forecastInput.style.padding = "2px 2px"
                //forecastInput.style.color= "grey"
                forecastInput.style.borderRadius = "4px";

                const reachedInput = document.createElement('input');
                reachedInput.type = 'text';
                reachedInput.name = `reached-${round}-${i}`;
                reachedInput.placeholder = `reached-${round}-${i}`
                reachedInput.size = 10;
                reachedInput.style.border = "2px solid black";
                reachedInput.style.margin = "0 10px"
                reachedInput.style.padding = "2px 2px"
                reachedInput.style.borderRadius = "4px";

                const resultDiv = document.createElement('div');
                resultDiv.id = `result-${round}-${i}`;
                resultDiv.style.display = "inline-block";
                resultDiv.innerText = "result";
                resultDiv.style.border = "2px solid black";
                resultDiv.style.margin = "0 10px"
                resultDiv.style.padding = "2px 2px"
                resultDiv.style.borderRadius = "4px";
                resultDiv.style.background = "white";
                resultDiv.style.color = "grey";

                form.appendChild(forecastInput);
                form.appendChild(reachedInput);
                form.appendChild(resultDiv);
            }
            divRound.class = "perPerson";
            form.appendChild(divRound)


        }
   // }
    //getTheDataForm.appendChild(divForAll);

    form.style.border = "2px solid black";
    const finishCurrentRoundButton = document.createElement('button');
    finishCurrentRoundButton.innerText = 'Finish';
    finishCurrentRoundButton.style.border = "2px solid black";
    finishCurrentRoundButton.style.borderRadius = "4px";
    finishCurrentRoundButton.style.background = "transparent"//"rgba(30,40,35,0.8)";
    finishCurrentRoundButton.type = "submit";
    //finishCurrentRoundButton.style.textAlign ="end"


    form.appendChild(finishCurrentRoundButton);
    form.addEventListener('submit', createObjectWithFaR);
    form.addEventListener('submit', createNewRoundEventHandler)

    getTheDataForm.appendChild(form);
    //const lineBreak = document.createElement("br");
}