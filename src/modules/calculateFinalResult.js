import {getplayer} from "./State.js";


export function calculateFinalResult() {
    const player = getplayer();
    console.log(player);

    /*player {
    {
    forecast
    reached
    intermediateResult
    }
    }*/

    /*for (let key in player) {
        player[key].result += player[key].intermediateResult;
    }

    console.log(player);*/
    return player;
}




