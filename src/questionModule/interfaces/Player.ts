import { Pair } from "./Pair.js";
import { Question } from "./Question.js";

export interface Player {
  score: number;
  max_score: number;
  name: string;
  questions: Question[];
  pair: Pair[];
}

export function createPlayer():Player{
  return new class implements Player {
    max_score: number = 0;
    name: string = prompt("input new player name") as string;
    pair: Pair[] = [];
    questions: Question[] = [];
    score: number = 0;
  };
}