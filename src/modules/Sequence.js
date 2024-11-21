import {datasForGame} from "./datasForGame.js";

export function calculateSequence() {
    let roundHere = 1;
    let button = false;
    if (button){
        roundHere++;
    }

    const {persons} = datasForGame();
    const people = [];
    let newPeople = [];
    for (let i = 1; i <= persons; i++) {
        people.push("person" + i);
    }
    for (let i = 0; i <= 10; i++) {
        if (roundHere === 1 + i * persons) {
            return people
        } else {
            const x = roundHere - 1 - i * persons;
            newPeople = people.slice(x);
            const newPersonsEnd = people.slice(0, x).join();
            newPeople.push(newPersonsEnd);
            if (x <= 3) {
                break;
            }
        }
    }
    return newPeople
}

console.log(calculateSequence());