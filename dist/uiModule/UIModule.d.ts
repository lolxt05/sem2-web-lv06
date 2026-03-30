import { Answer } from "../questionModule/interfaces/Answer";
import { Player } from "../questionModule/interfaces/Player";
import { Question } from "../questionModule/interfaces/Question";
export interface UIModule {
    updateScoreboard(players: Player[]): void;
    displayScore(player: Player): void;
    displayQuestion(question: Question): void;
    selectAnswer(player: Player, question: Question, answer: Answer): void;
}
export declare const updateScoreboard: (players: Player[]) => void;
export declare const displayScore: (player: Player) => void;
export declare const displayQuestion: (question: Question) => void;
export declare const selectAnswer: (player: Player, question: Question, answer: Answer) => void;
//# sourceMappingURL=UIModule.d.ts.map