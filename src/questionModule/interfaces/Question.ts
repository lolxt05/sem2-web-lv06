import {Answer} from "./Answer.js";
import {Category} from "./enums/CategoryEnum.js";
import {Difficulty} from "./enums/DifficultyEnum.js";

export interface Question {
  question: string;
  category: Category;
  difficulty: Difficulty;
  answers: Answer[];
}