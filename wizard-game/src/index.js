import {numberOfPeopleEventHandler} from "./getNumberOfPeople.js";
import {outputEndGame} from "./endGame.js";

const numberInput = document.getElementById("numberOfPeopleInput");
numberInput.addEventListener("input", numberOfPeopleEventHandler);
document.getElementById("numberOfPeopleForm").addEventListener("submit", (event) => event.preventDefault());
document.getElementById("endGameButton").addEventListener("click", outputEndGame);
