import {setForecast} from "./sharedState.js";

export function pointsForGame(event) {
    const input = event.target;
    const formPointsForGame = new FormData(input.form);
    const fc00 = formPointsForGame.get("forecast00");
    const rd00 = formPointsForGame.get("reached00");

    const fc01 = formPointsForGame.get("forecast01");
    const rd01 = formPointsForGame.get("reached01");

    const fc10 = formPointsForGame.get("forecast10");
    const rd10 = formPointsForGame.get("reached10");

    const fc11 = formPointsForGame.get("forecast11");
    const rd11 = formPointsForGame.get("reached11");
    //console.log(fc00);
    setForecast([fc00, fc01, rd00, rd01, fc10, fc11, rd10, rd11]);
    return {fc00, fc01, rd00, rd01, fc10, fc11, rd10, rd11};
}

