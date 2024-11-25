import {increaseNumberOfRound} from "./state.js";
import {generateInputFields} from "./generateInputFields.js";

export function createNewRoundEventHandler() {
    increaseNumberOfRound();
    generateInputFields();
}