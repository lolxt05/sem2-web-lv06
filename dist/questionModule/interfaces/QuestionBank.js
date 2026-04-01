export class QuestionBank {
    constructor() {
        this.questions = [];
    }
    async load(path) {
        const response = await fetch(path);
        const data = await response.json();
        this.questions = data.questions;
    }
    getFiveQuestions() {
        const shuffled = [...this.questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 5);
    }
}
