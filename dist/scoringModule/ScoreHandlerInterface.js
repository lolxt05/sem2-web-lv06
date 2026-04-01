export class ScoreHandlerInterface {
    constructor() {
        this.increaseScore = (player, difficulty) => {
            player.score += +difficulty;
        };
        this.calculateScore = (player) => {
            player.score = 0;
            player.max_score = 0;
            player.pair.forEach((p) => {
                if (p.answer.correct) {
                    this.increaseScore(player, p.question.difficulty);
                }
                player.max_score += +p.question.difficulty;
            });
        };
        this.calculateScoreboard = (game) => {
            let players = [];
            game.players.forEach(player => {
                this.calculateScore(player);
                players.push(player);
            });
            players.sort((a, b) => b.score - a.score);
            return players;
        };
    }
}
