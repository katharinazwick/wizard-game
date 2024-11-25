

export function submitRoundEventHandler(event) {
    event.preventDefault();

    const pointsForStich = 10;
    const pointsForForecast = 20; //20 points bei forecast = reached

    const player = {};

    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {//forecast-0-1, 123
        value = parseInt(value);
        const splitKey = key.split("-",); //[forecast,0,1]
        let originalPlayerStateObject = player[splitKey[2]];

        if (!originalPlayerStateObject) {
            originalPlayerStateObject = {}
        }

        if (key.startsWith("forecast")) {
            originalPlayerStateObject.forecast = value;
            player[splitKey[2]] = originalPlayerStateObject;
            continue;
        }
        originalPlayerStateObject.reached = value; // {reached: 43, forecast: 32}
        player[splitKey[2]] = originalPlayerStateObject;
    }
    console.log("Output Result", player);// <form>

    for (let key in player) {
        if (player[key].forecast === player[key].reached) {
            player[key].result = pointsForForecast + pointsForStich * player[key].reached;
            continue;
        }
        const pointsForWrong = Math.abs((player[key].forecast - player[key].reached) * 10);
        player[key].result = pointsForStich * player[key].reached - pointsForWrong;
    }
    console.log("player",player);
}
    /*player{
    // "1": {
    "forecast":
    "reached":
        }
    }*/

