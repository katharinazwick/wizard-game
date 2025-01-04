import {getResult} from "./state.js";
import {calculateFinalResult} from "./calculateFinalResult.js";

export function outputEndGame() {
    calculateFinalResult();
    const result = getResult();
    for (let i = 0; i < result.length; i++) {
        for (let k = i + 1; k < result.length; k++) {
            if (result[i].result < result[k].result) {
                [result[i], result[k]] = [result[k], result[i]];
            }
        }
    }

    const place = document.getElementById("place");
    place.style.display="flex";

    const divEmpty = document.createElement("div");
    divEmpty.className="placement"
    divEmpty.style.height = "10px";
    place.appendChild(divEmpty);

    for (let i=0; i<result.length; i++) {
        const placement = document.createElement("div");
        placement.className = "placement";

        const text = document.createElement("div");
        text.className="placeOutput";
        text.innerText =`place-${i+1}`;
        if (i > 0){
            if(result[i].finalResult===result[i-1].finalResult){ //aktuell wenn zwei 1 plätze danach dritter
                text.innerText =`place-${i}`;
            }
        }
        const name = document.createElement("div");
        name.className="placeOutput";
        name.innerText= result[i].name;
        const score = document.createElement("div");
        score.className="placeOutput";
        score.innerText=result[i].finalResult;

        const divEmpty = document.createElement("div");
        divEmpty.className="placement"
        divEmpty.style.height = "10px";

        placement.appendChild(text);
        placement.appendChild(name);
        placement.appendChild(score);

        place.appendChild(placement);
        place.appendChild(divEmpty);
    }
    const name = document.getElementById("namesForm");
    name.style.pointerEvents = "none";
    const input = document.getElementById("getTheDataForm");
    input.style.pointerEvents="none";
    const output = document.getElementById("outputResult");
    output.style.display = "none";

}