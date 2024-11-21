import {getPeople} from './sharedState.js';
import {getForecast} from "./sharedState.js";

export function datasForGame() {
    const people = getPeople();
    const {fc00, fc01, rd00, rd01, fc10, fc11, rd10, rd11} = getForecast();
    const forecast = new Array(people) //Array generieren
    for (let i = 0; i < people; i++) {
        forecast[i] = [];
        if (i === 0) {
            forecast[i].push(fc00, fc01);
        }
        if (i === 1) {
            forecast[i].push(fc10, fc11);
        }
        if (i === 2) {
            forecast[i].push(2);
        }
        if (i === 3) {
            forecast[i].push(2);
        }
    }

    const reached = new Array(people) //Array generieren
    for (let i = 0; i < people; i++) {
        reached[i] = [];
        if (i === 0) {
            reached[i].push(rd00, rd01);
        }
        if (i === 1) {
            reached[i].push(rd10, rd11);
        }
        if (i === 2) {
            reached[i].push(8);
        }
        if (i === 3) {
            reached[i].push(9);
        }
    }
    console.log(forecast, reached);
    return {forecast, reached};
}