import { Question } from "./Question.js";

export interface QuestionBank {
  questions: Question[];
  load(path: string): Promise<void>;
  getFiveQuestions(): Question[];
}

export class QuestionBank implements QuestionBank {
  questions: Question[] = [];

  async load(path: string): Promise<void> {
    const response = await fetch(path);
    const data = await response.json();
    this.questions = data.questions as Question[];
  }

  getFiveQuestions(): Question[] {
    const shuffled = [...this.questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }
}
