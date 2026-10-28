import {MAX_PLAYERS, MIN_PLAYERS, parsePlayerCount, startGame} from "./state.js";
import {generateNameFields} from "./generateNameFields.js";
import {generateInputFields} from "./generateInputFields.js";
import {createOutputFields} from "./generateOutputFields.js";
import {updateSequence} from "./calculateSequence.js";

export function numberOfPeopleEventHandler(event) {
    const value = event.target.value;
    const count = parsePlayerCount(value);
    const hint = document.getElementById("numberOfPeopleHint");

    document.getElementById("game").hidden = count === null;
    document.getElementById("containerText").hidden = count !== null;
    hint.textContent = count === null && value !== "" ? `Bitte eine Zahl von ${MIN_PLAYERS} bis ${MAX_PLAYERS} eingeben.` : "";
    if (count === null) return;

    startGame(count);
    document.getElementById("getTheDataForm").replaceChildren();
    document.getElementById("game").style.setProperty("--players", count);
    generateNameFields();
    generateInputFields();
    createOutputFields();
    updateSequence();
}
