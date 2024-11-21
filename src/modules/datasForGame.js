import {numberOfPeople} from "./numberOfPeople.js";
//import {pointsForGame} from "./pointsForGame.js";

export function datasForGame() {
    const people = numberOfPeople(event);
    //const people = 3;
    //const {fc00, rd00, fc01, rd01, fc10, rd10, fc11, rd11} = pointsForGame(event);
    const forecast = new Array(people) //Array generieren
    for (let i = 0; i < people; i++) {
        forecast[i] = [];
        if (i === 0) {
            forecast[i].push(1, 2);
        }
        if (i === 1) {
            forecast[i].push(2, 1);
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
            reached[i].push(1, 2);
        }
        if (i === 1) {
            reached[i].push(1, 2);
        }
        if (i === 2) {
            reached[i].push(8);
        }
        if (i === 3) {
            reached[i].push(9);
        }
    }
    console.log(people, forecast, reached);
    return {people, forecast, reached};
}