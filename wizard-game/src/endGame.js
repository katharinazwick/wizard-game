import {getFinishedRounds, getStandings} from "./state.js";
import {el} from "./dom.js";

const MEDALS = {1: "🥇", 2: "🥈", 3: "🥉"};

export function outputEndGame() {
    if (getFinishedRounds() === 0) return;

    // Angefangene, aber nicht abgeschlossene Runde verwerfen und alles sperren.
    document.querySelector("#getTheDataForm .round:not(.done)")?.remove();
    document.querySelectorAll(".nameInput").forEach((input) => (input.disabled = true));
    document.getElementById("endGameButton").hidden = true;
    document.getElementById("outputSequence").hidden = true;
    document.getElementById("roundInfo").textContent = "Spiel beendet";

    const newGame = el("button", {class: "btn primary", type: "button", text: "Neues Spiel"});
    newGame.addEventListener("click", () => location.reload());

    const list = el("ol", {class: "ranking"}, ...getStandings().map(({name, total, place}) =>
        el("li", {class: `rank place-${place}`},
            el("span", {class: "rank-place", text: MEDALS[place] ?? `${place}.`}),
            el("span", {class: "rank-name", text: name}),
            el("span", {class: "rank-score", text: total}),
        ),
    ));

    const place = document.getElementById("place");
    place.replaceChildren(el("h2", {text: "Endergebnis"}), list, newGame);
    place.hidden = false;
    place.scrollIntoView({behavior: "smooth", block: "start"});
}
