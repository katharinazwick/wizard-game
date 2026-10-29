import {getPlayerCount, setName} from "./state.js";
import {el, playerColumns} from "./dom.js";
import {updateSequence} from "./calculateSequence.js";

export function generateNameFields() {
    const cells = playerColumns(getPlayerCount(), (i) => {
        const input = el("input", {
            class: "nameInput",
            type: "text",
            name: `name-${i}`,
            placeholder: `Spieler/Spielerin ${i + 1}`,
            maxLength: 14,
            autocomplete: "off",
            attrs: {"aria-label": `Name von Spieler ${i + 1}`},
        });
        input.addEventListener("input", () => {
            setName(i, input.value);
            updateSequence();
        });
        return el("div", {class: `cell player p${i + 1}`}, input);
    });

    document.getElementById("namesForm").replaceChildren(
        el("div", {class: "row"}, el("div", {class: "round-label", text: ""}), ...cells),
    );
}
