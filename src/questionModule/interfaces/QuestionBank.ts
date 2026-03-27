import { Question } from "./Question";

export interface QuestionBank {
  questions: Question[];
  load(path: string): void;
  getFiveQuestions(): Question[];
}
