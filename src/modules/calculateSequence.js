import {getPeople, getNameOfThePeople, getNumberOfRound} from "./state.js";
import {getName} from "./getNameOfThePlayer.js";

export function calculateSequence() {
    /*const input = event.target;
    const formCalculateSequence = new FormData(input.form);*/
    let currentRound = getNumberOfRound() + 1;
    const people = getPeople();
    getName();
    const name = getNameOfThePeople();

    const peopleSequence = [];
    let newPeople = [];

    /*const outputSequence = document.getElementById("outputSequence");

    if (outputSequence) {
        if (currentRound <= 0 || currentRound > 40) {
            outputSequence.innerText = "I guess this is not possible";
            return;
        }
    }*/

    for (let i = 0; i < name.length; i++) {
        if (name[i] === "") {
            peopleSequence.push("person" + (i + 1)); //person1 person2
        } else {
            peopleSequence.push(name[i]);
        }
    }

    while (currentRound > people) {
        currentRound -= people;
    }

    if (currentRound === 1) {
        newPeople = peopleSequence;
    } else {
        for (let i = currentRound - 1; i < people; i++) {
            newPeople.push(peopleSequence[i]);
        }
        for (let i = 0; i < currentRound - 1; i++) {
            newPeople.push(peopleSequence[i])
        }
    }

    const outputSequence = document.getElementById("outputSequence");

    if (outputSequence) {
        outputSequence.innerText = `new Sequence is: ${newPeople}`;
    }

    return newPeople;
}


