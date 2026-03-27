import { Pair } from "./Pair";
import { Question } from "./Question";

export interface Player {
  score: number;
  name: string;
  questions: Question[];
  pair: Pair[];
}
