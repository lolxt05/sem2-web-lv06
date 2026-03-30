import {Answer} from "./Answer";
import {Category} from "./enums/CategoryEnum";
import {Difficulty} from "./enums/DifficultyEnum";

export interface Question {
  question: string;
  category: Category;
  difficulty: Difficulty;
  answers: Answer[];
}