import {getPeople, setCurrentRound} from "./state.js";

export function calculateSequence(event) {
    const input = event.target;
    const formCalculateSequence = new FormData(input.form);
    const currentRound = formCalculateSequence.get("calculateSequence");
    const people = getPeople();

    const peopleSequence = [];
    let newPeople = [];

    for (let i = 1; i <= people; i++) {
        peopleSequence.push("person" + i);
    }
    for (let i = 0; i <= 10; i++) {
        if (currentRound === 1 + i * people) {
            return peopleSequence
        } else {
            const x = currentRound - 1 - i * people;
            newPeople = peopleSequence.slice(x);
            const newPersonsEnd = peopleSequence.slice(0, x).join();
            newPeople.push(newPersonsEnd);
            if (x <= 3) {
                break;
            }
        }
    }
    setCurrentRound(newPeople);
    console.log(newPeople);
    return newPeople;
}

