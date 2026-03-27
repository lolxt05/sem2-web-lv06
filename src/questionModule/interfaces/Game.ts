import { Player } from "./Player";
import { QuestionBank } from "./QuestionBank";

export interface Game {
  question: QuestionBank;
  players: Player[];
}
