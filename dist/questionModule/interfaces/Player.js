export function createPlayer() {
    return {
        max_score: 0,
        name: prompt("input new player name"),
        pair: [],
        questions: [],
        score: 0,
    };
}
