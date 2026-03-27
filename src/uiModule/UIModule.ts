import { Answer } from "../questionModule/interfaces/Answer";
import { Player } from "../questionModule/interfaces/Player";
import { Question } from "../questionModule/interfaces/Question";

export interface UIModule {
  displayScoreboard(players: Player[]): void;
  displayScore(player: Player): void;
  displayQuestion(question: Question): void;
  selectAnswer(player: Player, question: Question, answer: Answer): void;
}
