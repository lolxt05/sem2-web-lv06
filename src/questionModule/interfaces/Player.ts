import { Pair } from "./Pair.js";
import { Question } from "./Question.js";

export interface Player {
  score: number;
  max_score: number;
  name: string;
  questions: Question[];
  pair: Pair[];
}

export function createPlayer(): Player {
  return {
    max_score: 0,
    name: prompt("input new player name") as string,
    pair: [],
    questions: [],
    score: 0,
  };
}
