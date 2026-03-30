import { Answer } from "../questionModule/interfaces/Answer.js";
import { Player } from "../questionModule/interfaces/Player.js";
import { Question } from "../questionModule/interfaces/Question.js";
import {Category} from "../questionModule/interfaces/enums/CategoryEnum.js";
import {Difficulty} from "../questionModule/interfaces/enums/DifficultyEnum.js";



export interface UIModule {
  updateScoreboard(players: Player[]): void;
  displayScore(player: Player): void;
  displayQuestion(question: Question): void;
  selectAnswer(player: Player, question: Question, answer: Answer): void;
}


export const updateScoreboard = (players: Player[]) => {
  let container = document.getElementById("container") as HTMLElement;
  container.textContent = "";
}

export const displayScore = (player: Player) => {
  let container = document.getElementById("container") as HTMLElement;
  container.textContent = "";}

export const displayQuestion = (question: Question) => {
  console.log("test123");
  let container = document.getElementById("container") as HTMLElement;
  container.textContent = "";
  let Question: HTMLDivElement = document?.createElement("div");
  Question.innerHTML = question.question;

  container.appendChild(Question);

  for (let i = 0; i < question.answers.length; i++) {
    let answer = question.answers[i] as Answer;
    let Answerbutton: HTMLButtonElement = document.createElement("button");
    Answerbutton.innerHTML = answer.answer;
    Answerbutton.id = "A-" + i;
    Answerbutton.classList = "btn btn-primary";
    Answerbutton.addEventListener("click",()=>{
      console.log("Answer_div"+ i+ " clicked");
    })
    container.appendChild(Answerbutton);
  }
}

export const selectAnswer = (player: Player, question: Question, answer: Answer) => {
  
}