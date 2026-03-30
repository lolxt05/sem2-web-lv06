import { Category } from "./questionModule/interfaces/enums/CategoryEnum.js";
import { Difficulty } from "./questionModule/interfaces/enums/DifficultyEnum.js";
const Mock_Question = {
    question: 'Hello world planet is known as the Red Planet?',
    category: Category.Geography,
    difficulty: Difficulty.EASY,
    answers: [
        { answer: 'Earth', correct: false },
        { answer: 'Mars', correct: true },
        { answer: 'Jupiter', correct: false },
        { answer: 'Venus', correct: false }
    ]
};
