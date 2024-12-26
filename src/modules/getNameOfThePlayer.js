import {getGameState, setGameState} from './state.js';

export function getName(event) {
    const gameState = getGameState()

    const formData = new FormData(event.target);

    for (let [key, value] of formData.entries()) {
        const splitKey = key.split("-",); //[name,1]
        gameState[splitKey - 1].name = value;
    }

    setGameState(gameState);
    return gameState;
}