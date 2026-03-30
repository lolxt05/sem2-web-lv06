import { Difficulty } from "../questionModule/interfaces/enums/DifficultyEnum.js";
import { Game } from "../questionModule/interfaces/Game.js";
import { Player } from "../questionModule/interfaces/Player.js";

export interface ScoreHandlerInterface {
  calculateScoreboard(game: Game): Player[];
  increaseScore(player: Player, difficulty: Difficulty): void;
}
