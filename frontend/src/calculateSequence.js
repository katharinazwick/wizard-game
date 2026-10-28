import {getMaxRounds, getNames, getRound} from "./state.js";
import {rotateSequence} from "./scoring.js";
import {el} from "./dom.js";

/** Zeigt die aktuelle Runde und die Reihenfolge, in der angesagt wird. */
export function updateSequence() {
    const round = getRound();
    document.getElementById("roundInfo").textContent = `Runde ${Math.min(round, getMaxRounds())} von ${getMaxRounds()}`;

    const chips = rotateSequence(getNames(), round).map((name, i) =>
        el("li", {class: i === 0 ? "chip first" : "chip", text: name}),
    );
    document.getElementById("outputSequence").replaceChildren(
        el("span", {class: "sequence-label", text: "Reihenfolge"}),
        el("ol", {class: "chips"}, ...chips),
    );
}
