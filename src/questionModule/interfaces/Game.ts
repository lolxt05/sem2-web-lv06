import { Player, createPlayer } from "./Player.js";
import { QuestionBank } from "./QuestionBank.js";
import { UIModuleInterface } from "../../uiModule/UIModuleInterface.js";

export interface Game {
  question: QuestionBank;
  players: Player[];
  start(): void;
}

export class Game implements Game {
  question: QuestionBank;
  players: Player[] = [];
  private ui = new UIModuleInterface();

  constructor(questions: QuestionBank) {
    this.question = questions;
  }

  start(): void {
    document.getElementById("new-Player")?.addEventListener("click", () => {
      const player = createPlayer();
      player.questions = this.question.getFiveQuestions();
      this.players.push(player);
      this.ui.displayQuestion(player, this);
    });
  }
}
