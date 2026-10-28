import {finishRound, getPlayerCount, getRound} from "./state.js";
import {calculateRoundScore} from "./scoring.js";
import {el} from "./dom.js";

function showMessage(form, text, type = "error") {
    const message = form.querySelector(".row-message");
    message.textContent = text;
    message.className = `row-message ${text ? type : ""}`;
    message.hidden = !text;
}

function readEntries(form, maxValue) {
    const entries = [];
    let firstInvalid = null;

    for (let i = 0; i < getPlayerCount(); i++) {
        const entry = {};
        for (const field of ["forecast", "reached"]) {
            const input = form.elements[`${field}-${i}`];
            const raw = input.value.trim();
            const value = Number(raw);
            const valid = raw !== "" && Number.isInteger(value) && value >= 0 && value <= maxValue;
            input.classList.toggle("invalid", !valid);
            if (!valid) firstInvalid ??= input;
            entry[field] = value;
        }
        entries.push(entry);
    }
    return {entries, firstInvalid};
}

/** Wandelt die Eingabefelder einer abgeschlossenen Runde in eine feste Anzeige um. */
function lockRow(form, results) {
    form.classList.add("done");
    form.querySelectorAll(".cell").forEach((cell, i) => {
        const {forecast, reached, score} = results[i];
        cell.querySelector(".fields").replaceWith(el("div", {class: "summary", text: `${forecast} / ${reached}`}));
        const pill = cell.querySelector(".score");
        pill.textContent = score > 0 ? `+${score}` : score;
        pill.classList.add(score > 0 ? "pos" : score < 0 ? "neg" : "zero");
    });
    form.querySelector(".finish").remove();
    showMessage(form, "");
}

/**
 * Liest Ansagen und Stiche einer Runde, prüft sie, berechnet die Punkte und schließt die Runde ab.
 * Gibt false zurück, solange die Eingaben unvollständig sind oder noch bestätigt werden müssen.
 */
export function finishRoundFromForm(form) {
    const round = getRound();
    const {entries, firstInvalid} = readEntries(form, round);

    if (firstInvalid) {
        showMessage(form, `Trage bitte überall eine ganze Zahl von 0 bis ${round} ein.`);
        firstInvalid.focus();
        return false;
    }

    // Weicher Hinweis: in jeder Runde werden genau so viele Stiche gemacht, wie Karten verteilt wurden.
    const trickSum = entries.reduce((sum, entry) => sum + entry.reached, 0);
    if (trickSum !== round && form.dataset.confirmedSum !== String(trickSum)) {
        form.dataset.confirmedSum = trickSum;
        showMessage(form, `Es wurden ${trickSum} Stiche eingetragen, gab aber nur ${round} ${round === 1 ? "Karte" : "Karten"} pro Spieler.`, "warning");
        return false;
    }

    const results = entries.map(({forecast, reached}) => ({
        forecast,
        reached,
        score: calculateRoundScore(forecast, reached),
    }));
    finishRound(results);
    lockRow(form, results);
    return true;
}
