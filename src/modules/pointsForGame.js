import {setForecast, setReached} from "./sharedState.js";

export function pointsForGame(event) {
    const input = event.target;
    const formPointsForGame = new FormData(input.form);
    console.log(formPointsForGame);
    const fc = []
    const rd = []
    for (let p = 0; p < 4; p++) {
        fc[p] = [];
        rd[p] = [];
        for (let i =0; i<3;i++){
            if (formPointsForGame.get(`forecast${p}${i}`) !== '') {
                fc[p][i] = formPointsForGame.get(`forecast${p}${i}`);
                rd[p][i] = formPointsForGame.get(`reached${p}${i}`);
            }
        }
    }
    //console.log(fc);
    setForecast (fc);
    setReached(rd);
    return {fc, rd};
}


