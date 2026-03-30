import { Pair } from "./Pair.js";
import { Question } from "./Question.js";

export interface Player {
  score: number;
  name: string;
  questions: Question[];
  pair: Pair[];
}
