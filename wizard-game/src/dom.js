/** Kleiner Helfer zum Erzeugen von Elementen: el("div", {class: "x", text: "Hi"}, ...kinder) */
export function el(tag, {class: className, text, attrs, ...props} = {}, ...children) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    Object.assign(node, props);
    for (const [name, value] of Object.entries(attrs ?? {})) node.setAttribute(name, value);
    node.append(...children);
    return node;
}

/** Zeile mit einer Spalte für das Rundenlabel + einer Spalte pro Spieler (siehe .row in game.css). */
export function playerColumns(count, build) {
    return Array.from({length: count}, (_, i) => build(i));
}
