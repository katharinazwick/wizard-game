import {getFinishedRounds, getPlayerCount, getTotals} from "./state.js";
import {el, playerColumns} from "./dom.js";

/** Summenzeile ("Σ") – wird nach jeder Runde mit updateOutputFields() aktualisiert. */
export function createOutputFields() {
    const cells = playerColumns(getPlayerCount(), (i) => el("div", {class: `cell total p${i + 1}`, text: "0"}));
    document.getElementById("outputResult").replaceChildren(
        el("div", {class: "row"}, el("div", {class: "round-label", text: "Σ"}), ...cells),
    );
    updateOutputFields();
}

export function updateOutputFields() {
    const totals = getTotals();
    const best = Math.max(...totals);
    document.querySelectorAll("#outputResult .total").forEach((cell, i) => {
        cell.textContent = totals[i];
        cell.classList.toggle("leader", getFinishedRounds() > 0 && totals[i] === best);
    });
}
