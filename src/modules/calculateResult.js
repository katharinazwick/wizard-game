import {getPeople, getTheData} from "./state.js";

export function calculateResult() {
    const people = getPeople();
    const theData = getTheData();
    const pointsForStich = 10;
    const pointsForForecast = 20; //20 points bei forecast = reached

    for (let i = 0; i < people; i++) {

        if (theData[i].forecast === theData[i].reached) {
            theData[i].result = pointsForForecast + pointsForStich * theData[i].reached
        } else {
            let pointForWrong = 0;
            pointForWrong = Math.abs((theData[i].forecast - theData[i].reached) * 10);
            theData[i].result = pointsForStich * theData[i].reached - pointForWrong;
        }
    }
    console.log(theData);
    return theData
}

const theData = calculateResult();

const button = document.getElementById('logButton');
button.addEventListener('click', () => {
    console.log(theData);
});

