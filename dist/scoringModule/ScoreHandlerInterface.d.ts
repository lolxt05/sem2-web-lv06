import { Difficulty } from "../questionModule/interfaces/enums/DifficultyEnum";
import { Game } from "../questionModule/interfaces/Game";
import { Player } from "../questionModule/interfaces/Player";
export interface ScoreHandlerInterface {
    calculateScoreboard(game: Game): Player[];
    increaseScore(player: Player, difficulty: Difficulty): void;
}
//# sourceMappingURL=ScoreHandlerInterface.d.ts.map