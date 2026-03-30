import { Difficulty } from "../questionModule/interfaces/enums/DifficultyEnum.js";
import { Game } from "../questionModule/interfaces/Game.js";
import { Player } from "../questionModule/interfaces/Player.js";

export interface ScoreHandlerInterface {
  calculateScoreboard(game: Game): Player[];
  calculateScore(player:Player): void;
  increaseScore(player: Player, difficulty: Difficulty): void;
}

export class ScoreHandlerInterface implements ScoreHandlerInterface {
  increaseScore = (player: Player, difficulty: Difficulty) => {
    player.score += +Difficulty;
  }

  calculateScore = (player: Player): void => {
    player.score = 0;
    player.max_score = 0;
    player.pair.forEach((p) => {
      if (p.answer.correct) {
        this.increaseScore(player, p.question.difficulty);
      }
      player.max_score += +p.question.difficulty;
    })
  }

  calculateScoreboard = (game: Game): Player[] => {
    let players: Player[] = [];

    game.players.forEach(player => {
      this.calculateScore(player);
      players.push(player);
    })

    players.sort((a, b) => b.score - a.score);
    return players;
  }
}