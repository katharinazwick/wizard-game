/*import {getPeople, getRound} from "./sharedState.js";

export function calculateSequence(event) {

    const round = getRound();

    const people = getPeople();
    const peopleSequence = [];
    let newPeople = [];
    for (let i = 1; i <= people; i++) {
        peopleSequence.push("person" + i);
    }
    for (let i = 0; i <= 10; i++) {
        if (round === 1 + i * people) {
            return peopleSequence
        } else {
            const x = round - 1 - i * people;
            newPeople = peopleSequence.slice(x);
            const newPersonsEnd = peopleSequence.slice(0, x).join();
            newPeople.push(newPersonsEnd);
            if (x <= 3) {
                break;
            }
        }
    }
    console.log(newPeople);
    return newPeople;
}*/