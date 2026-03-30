import {Question} from "./questionModule/interfaces/Question";
import {Category} from "./questionModule/interfaces/enums/CategoryEnum";
import {Difficulty} from "./questionModule/interfaces/enums/DifficultyEnum";
import {displayQuestion} from "./uiModule/UIModule"

const Mock_Question: Question = {
    question: 'What planet is known as the Red Planet?',
    category: Category.Geography,
    difficulty: Difficulty.EASY,
    answers: [
        { answer: 'Earth',  correct: false },
        { answer: 'Mars',   correct: true  },
        { answer: 'Jupiter',correct: false },
        { answer: 'Venus',  correct: false }
    ]
}

displayQuestion(Mock_Question);