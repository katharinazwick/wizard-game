function getTheData() {
    const people = 2;
    const theData = [];

    const pointsForStich = 10;
    const pointsForForecast = 20; //20 points bei forecast = reached

    for (let i = 1; i <= people; i++) {
        theData.push({
            name: "",
            forecast: [],
            reached: [],
            result: [],
            finalResult: []
        });

       // let keys = Object.keys(theData[i]); //["name", "forecast"...]

        theData[i-1].name= ("paul"); //11
        theData[i-1].name =("heinz") ;
        theData[i-1].forecast.push(i+3);
        theData[i-1].forecast.push(i+3);
        theData[i-1].reached.push(i + 2);
        theData[i-1].reached.push(i + 3);
    }

    for (let i = 0; i < people; i++) {
        for (let p = 0; p < 2; p++) {
            if (theData[i].forecast[p] === theData[i].reached[p]) {
                theData[i].result[p] = pointsForForecast + pointsForStich * theData[i].reached[p]
            } else {
                let pointForWrong = 0;
                pointForWrong = Math.abs((theData[i].forecast[p] - theData[i].reached[p]) * 10);
                theData[i].result[p] = pointsForStich * theData[i].reached[p] - pointForWrong;
            }
        }
    }
    return theData;
}

console.log(getTheData());