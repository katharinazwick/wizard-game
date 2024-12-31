/*import {getName} from "./src/modules/getNameOfThePlayer";

let array = [{b:""}, {c:""}];

for (let i of array) {
    console.log(i);
    i.b= "hallo";
}
 console.log(array);

const endGame = document.getElementById("endGame");

if(endGame){
    endGame.addEventListener("click", getName);
}*/


function calculateSequence() {
    let currentRound = 4;
    const people = 4;

    const peopleSequence = [];
    let newPeople = [];

    for (let i = 1; i <= people; i++) {
        peopleSequence.push("person" + i); //person1 person2
    }

    while (currentRound > people) {
        currentRound -= people;
    }

    if (currentRound === 1){
        return peopleSequence;
    } else {//2,3
        for (let i = currentRound-1; i<people; i++) {
            newPeople.push(peopleSequence[i]);
        }
        for (let i=0; i<currentRound-1; i++){
            newPeople.push(peopleSequence[i])
        }
    }

    return newPeople;
}

console.log(calculateSequence());