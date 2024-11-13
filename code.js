function calculatePoints() {
    const forecast = [ //Vorhersage
        [0, 1, 1, 2, 2, 3, 2, 4, 4, 3, 4, 4, 3, 6, 5], //Nikolaus
        [1, 0, 1, 2, 2, 1, 2, 4, 4, 4, 5, 5, 5, 7, 7], //Lisa
        [0, 1, 2, 3, 4, 4, 3, 3, 5, 5, 5, 5, 6, 6, 6]  //Kathi
    ];
    const reached = [ //Erreicht
        [1, 0, 0, 2, 3, 0, 2, 1, 5, 0, 5, 4, 2, 6, 4], //
        [0, 1, 0, 0, 0, 0, 3, 2, 2, 4, 5, 5, 5, 4, 9], //
        [0, 1, 3, 2, 2, 6, 2, 5, 2, 6, 1, 3, 6, 4, 2]  //
    ];
    const pointsForStich = 10;
    const pointsForForecast = 20; //20 points bei forecast = reached
    let result = [[], [], []];
    for (let k = 0; k <= 2; k++) {
        for (let i in forecast[k]) {
            result[k][i] = pointsForForecast + pointsForStich * reached[k][i];
        }
    }
    for (let k = 0; k <= 2; k++) {
        for (let i in forecast[k]) {
            if (forecast[k][i] !== reached[k][i]) {
                let pointForWrong = 0;
                pointForWrong = Math.abs((forecast[k][i] - reached[k][i]) * 10);
                result[k][i] = pointsForStich * reached[k][i] - pointForWrong
            }
        }
    }
    let finalResult = [0, 0, 0];
    for (let k = 0; k <= 2; k++) {
        for (let i = 0; i < forecast[0].length; i++) {
            finalResult[k] = finalResult[k] + result[k][i]
        }
    }
    let round = 0;
    round = result[0].length;
    return {result, finalResult, round}
}

console.log(calculatePoints());

function calculateSequence() {
    let roundHere = calculatePoints().round + 1;
    const persons = [];
    let newPersons = [];
    const numberOfPeople = 3;
    for (let i = 1; i <= numberOfPeople; i++) {
        persons.push("person" + i);
    }
    for (let i = 0; i <= 10; i++) {
        if (roundHere === 1 + i * numberOfPeople) {
            return persons
        } else {
            const x = roundHere - 1 - i * numberOfPeople;
            newPersons = persons.slice(x);
            const newPersonsEnd = persons.slice(0, x).join();
            newPersons.push(newPersonsEnd);
            if (x <= 3) {
                break;
            }
        }
    }
    return newPersons
}

console.log(calculateSequence());