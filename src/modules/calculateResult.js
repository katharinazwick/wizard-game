import {getPeople, getTheData} from "./state.js";

export function calculateResult() {
    const people = getPeople();
    const storedData = getTheData();
    const pointsForStich = 10;
    const pointsForForecast = 20; //20 points bei forecast = reached

    for (let i = 0; i < people; i++) {
        for (let p in storedData[i].forecast) {
            if (storedData[i].forecast[p] === storedData[i].reached[p]) {
                storedData[i].result[p] = pointsForForecast + pointsForStich * storedData[i].reached[p]
            } else {
                let pointForWrong = 0;
                pointForWrong = Math.abs((storedData[i].forecast[p] - storedData[i].reached[p]) * 10);
                storedData[i].result[p] = pointsForStich * storedData[i].reached[p] - pointForWrong;
            }
        }
    }
    console.log(storedData);
    return storedData
}



