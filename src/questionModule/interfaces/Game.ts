import { Player } from "./Player.js";
import { QuestionBank } from "./QuestionBank.js";

export interface Game {
  question: QuestionBank;
  players: Player[];
}
