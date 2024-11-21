let people = null;

export function setPeople(value) {
    people = parseInt(value, 10);
}

export function getPeople() {
    return people;
}

let fc00, fc01, rd00, rd01, fc10, fc11, rd10, rd11 = null;

export function setForecast(value) {
    fc00 = parseInt(value[0], 10);
    fc01 = parseInt(value[1], 10);
    rd00 = parseInt(value[2], 10);
    rd01 = parseInt(value[3], 10);
    fc10 = parseInt(value[4], 10);
    fc11 = parseInt(value[5], 10);
    rd10 = parseInt(value[6], 10);
    rd11 = parseInt(value[7], 10);
}

export function getForecast() {
    return {fc00, fc01, rd00, rd01, fc10, fc11, rd10, rd11};
}