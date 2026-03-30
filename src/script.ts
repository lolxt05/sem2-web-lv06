import {Question} from "./questionModule/interfaces/Question.js";
import {Category} from "./questionModule/interfaces/enums/CategoryEnum.js";
import {Difficulty} from "./questionModule/interfaces/enums/DifficultyEnum.js";
import {UIModuleInterface} from "./uiModule/UIModuleInterface";
import {createPlayer, Player} from "./questionModule/interfaces/Player";
import {Pair} from "./questionModule/interfaces/Pair";

const Mock_Question: Question = {
    question: 'Hello world planet is known as the Red Planet?',
    category: Category.Geography,
    difficulty: Difficulty.EASY,
    answers: [
        { answer: 'Earth',  correct: false },
        { answer: 'Mars',   correct: true  },
        { answer: 'Jupiter',correct: false },
        { answer: 'Venus',  correct: false }
    ]
}
const UI_Module = new UIModuleInterface();



document.getElementById("new-Player")?.addEventListener("click", (e) => {
    if (document.getElementById("new-Player")?.classList.contains("disabled")) {
        alert("wait until the round for this player is over to create a new one");
        return;
    }
    createPlayer();
})



document.getElementById("new-Player")?.classList.toggle("disabled");

while(UI_Module.displayQuestion());