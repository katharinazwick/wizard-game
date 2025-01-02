import {numberOfPeopleEventHandler} from "./getNumberOfPeople.js";
import {calculateFinalResult} from "./calculateFinalResult.js";
import {outputEndGame} from "./endGame.js";


//zum Holen der Anzahl der Personen
const numberOfPeopleInputs = document.querySelectorAll("input[name=numberOfPeople]");
//console.log(numberOfPeopleInputs)
for (let input of numberOfPeopleInputs) {
    input.addEventListener("input", numberOfPeopleEventHandler);
}

const logbutton = document.getElementById("logbutton");
if(logbutton){
    logbutton.addEventListener("click", calculateFinalResult);
}

const endGameButton = document.getElementById("endGameButton");
if(endGameButton){
    endGameButton.addEventListener("click", outputEndGame);
}