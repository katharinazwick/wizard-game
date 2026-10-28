// Reine Rechenlogik ohne DOM – leicht testbar.

export const POINTS_PER_TRICK = 10;
export const BONUS_FOR_EXACT_FORECAST = 20;

/** Richtig angesagt: 20 + 10 pro Stich. Sonst: 10 pro Stich minus 10 pro Abweichung. */
export function calculateRoundScore(forecast, reached) {
    const trickPoints = POINTS_PER_TRICK * reached;
    if (forecast === reached) {
        return BONUS_FOR_EXACT_FORECAST + trickPoints;
    }
    return trickPoints - POINTS_PER_TRICK * Math.abs(forecast - reached);
}

export function calculateTotal(rounds) {
    return rounds.reduce((sum, round) => sum + round.score, 0);
}

/** Sortiert absteigend nach Punkten; gleiche Punktzahl = gleicher Platz (1, 1, 3, …). */
export function rankPlayers(entries) {
    const ranked = [];
    [...entries].sort((a, b) => b.total - a.total).forEach((entry, i) => {
        const tied = i > 0 && entry.total === ranked[i - 1].total;
        ranked.push({...entry, place: tied ? ranked[i - 1].place : i + 1});
    });
    return ranked;
}

/** Wer in der angegebenen Runde (ab 1) beginnt, steht vorne – jede Runde rückt es einen weiter. */
export function rotateSequence(names, round) {
    const start = (round - 1) % names.length;
    return [...names.slice(start), ...names.slice(0, start)];
}
