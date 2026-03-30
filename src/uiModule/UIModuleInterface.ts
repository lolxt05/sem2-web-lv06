import { Answer } from "../questionModule/interfaces/Answer.js";
import { Player } from "../questionModule/interfaces/Player.js";
import { Question } from "../questionModule/interfaces/Question.js";
import  {Category } from "../questionModule/interfaces/enums/CategoryEnum.js";
import { Difficulty } from "../questionModule/interfaces/enums/DifficultyEnum.js";
import { Pair } from "../questionModule/interfaces/Pair";
import { Game } from "../questionModule/interfaces/Game.js";
import {ScoreHandlerInterface} from "../scoringModule/ScoreHandlerInterface.js"

const ScoreHandler = new ScoreHandlerInterface();

export interface UIModuleInterface {
  updateScoreboard(players: Player[]): void;
  displayScore(player: Player): void;
  displayQuestion(player: Player, game: Game): boolean;
  selectAnswer(player: Player, question: Question, answer: Answer): void;
}

export class UIModuleInterface implements UIModuleInterface {
  updateScoreboard = (players: Player[]) => {
    let container = document.getElementById("scoreboard") as HTMLElement;
    container.textContent = "";
  }

  displayScore = (player: Player) => {
    let score_div = document.getElementById("score") as HTMLElement;
    ScoreHandler.calculateScore(player);
    score_div.textContent = player.name + " has " + player.score + " out of: " + player.max_score + " points";
  }

  displayQuestion = (player: Player, game: Game):boolean => {
    if(player.questions.length >= player.pair.length){
      return false;
    }
    let question = player.questions[player.pair.length];

    let container = document.getElementById("container") as HTMLElement;
    container.textContent = "";
    let Question: HTMLDivElement = document?.createElement("div");
    Question.innerHTML = question.question;

    container.appendChild(Question);

    for (let i = 0; i < question.answers.length; i++) {
      let answer = question.answers[i] as Answer;
      let answer_button: HTMLButtonElement = document.createElement("button");
      answer_button.innerHTML = answer.answer;
      answer_button.id = "A-" + i;
      answer_button.classList = "btn btn-primary";
      answer_button.addEventListener("click", () => {
        this.selectAnswer(player, question, answer);
        this.displayQuestion(player, game);
        this.displayScore(player);
        this.updateScoreboard(ScoreHandler.calculateScoreboard(game));
      })
      container.appendChild(answer_button);
    }
    return true;
  }

  selectAnswer = (player: Player, question: Question, answer: Answer) => {
    let pair: Pair = {
      question,
      answer
    };
    player.pair.push(pair);
    ScoreHandler.increaseScore(player, question.difficulty);
  }
}