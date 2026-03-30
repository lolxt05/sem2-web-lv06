import { Question } from "./Question.js";

export interface QuestionBank {
  questions: Question[];
  load(path: string): void;
  getFiveQuestions(): Question[];
}
