let people = null;

export function setPeople(value) {
    people = parseInt(value, 10);
}

export function getPeople() {
    return people;
}

let fc = [[]]
//let fc00, fc01 = null;

/*export function setForecast(value) {
    //fcData = value.map (row => row.map (cell => parseInt(cell, 10)));
    //fc = parseInt(value, 10);
    for (let p = 0; p < 4; p++) {
        for (let i =0; i<3;i++){
            fc[p][i] = parseInt(value, 10);
        }
    }
}

export function getForecast() {
    return fc;
}*/
// export
//  fcData
export let fcData = []; // Globale Variable für die Vorhersage-Daten

export function setForecast(value) {
    fcData = value.map(row => row.map(cell => parseInt(cell, 10)));
}

/*
export function getForecast() {
    return fcData;
}
*/

let rdData = [];

export function setReached(value) {
    rdData = value.map(row => row.map(cell => parseInt(cell, 10)));
}

export function getReached() {
    return rdData;
}

let round = null;

export function setRound(value) {
    round = parseInt(value, 10);
}

export function getRound(value) {
    return round;
}