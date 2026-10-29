import {getMaxRounds, getPlayerCount, getRound, isGameOver} from "./state.js";
import {el, playerColumns} from "./dom.js";
import {finishRoundFromForm} from "./finishRound.js";
import {updateOutputFields} from "./generateOutputFields.js";
import {updateSequence} from "./calculateSequence.js";
import {outputEndGame} from "./endGame.js";

function numberField(kind, label, round, player) {
    const input = el("input", {
        type: "number",
        name: `${kind}-${player}`,
        min: 0,
        max: round,
        inputMode: "numeric",
        placeholder: "–",
        attrs: {"aria-label": `${label} Spieler/Spielerin ${player + 1}, Runde ${round}`},
    });
    return el("label", {class: "field"}, el("span", {text: label}), input);
}

/** Erzeugt die Eingabezeile für die aktuelle Runde und hängt sie unten an. */
export function generateInputFields() {
    const round = getRound();
    const isLast = round === getMaxRounds();

    const cells = playerColumns(getPlayerCount(), (i) =>
        el("div", {class: `cell p${i + 1}`},
            el("div", {class: "fields"}, numberField("forecast", "Vorhersage", round, i), numberField("reached", "Stiche", round, i)),
            el("div", {class: "score", text: "–"}),
        ),
    );

    const form = el("form", {class: "row round", noValidate: true},
        el("div", {class: "round-label"}, el("strong", {text: round}), el("span", {text: round === 1 ? "Karte" : "Karten"})),
        ...cells,
        el("p", {class: "row-message", hidden: true, attrs: {role: "alert"}}),
        el("button", {class: "btn primary finish", type: "submit", text: isLast ? "Letzte Runde abschließen" : "Runde abschließen"}),
    );

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!finishRoundFromForm(form)) return;
        startNextRound();
    });

    document.getElementById("getTheDataForm").append(form);
    if (round > 1) form.scrollIntoView({behavior: "smooth", block: "center"});
    form.querySelector("input").focus({preventScroll: true});
}

function startNextRound() {
    document.getElementById("numberOfPeopleInput").disabled = true;
    document.getElementById("endGameButton").disabled = false;
    updateOutputFields();
    updateSequence();

    if (isGameOver()) {
        outputEndGame();
    } else {
        generateInputFields();
    }
}
