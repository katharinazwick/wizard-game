import {getPeople} from "./State.js";


export function calculateFinalResult() {
    const storedData = calculateResult();
    const people = getPeople();

    for (let i = 0; i < people; i++) { //finalResult ausrechnen
        storedData[i].finalResult = 0;
        for (let p in storedData[i].result) {
            storedData[i].finalResult = storedData[i].finalResult + storedData[i].result[p];
        }
    }

    console.log(storedData);
    return storedData;
}




