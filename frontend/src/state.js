import {calculateTotal, rankPlayers} from "./scoring.js";

export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 6;
const CARDS_IN_DECK = 60;

// players[i] = { name, rounds: [{ forecast, reached, score }] }
let players = [];
let round = 1;

export function parsePlayerCount(value) {
    const count = Number(value);
    return Number.isInteger(count) && count >= MIN_PLAYERS && count <= MAX_PLAYERS ? count : null;
}

export function startGame(count) {
    players = Array.from({length: count}, () => ({name: "", rounds: []}));
    round = 1;
}

export const getPlayerCount = () => players.length;
export const getRound = () => round;
export const getFinishedRounds = () => round - 1;
export const getMaxRounds = () => CARDS_IN_DECK / players.length;
export const isGameOver = () => round > getMaxRounds();

export function setName(index, name) {
    players[index].name = name.trim();
}

export function getName(index) {
    return players[index].name || `Spieler/Spielerin ${index + 1}`;
}

export const getNames = () => players.map((_, i) => getName(i));
export const getTotals = () => players.map((player) => calculateTotal(player.rounds));

/** results[i] = { forecast, reached, score } für Spieler i; schließt die aktuelle Runde ab. */
export function finishRound(results) {
    results.forEach((result, i) => players[i].rounds.push(result));
    round += 1;
}

export function getStandings() {
    return rankPlayers(players.map((_, i) => ({name: getName(i), total: getTotals()[i]})));
}
