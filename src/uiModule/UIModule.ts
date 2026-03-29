import { Answer } from "../questionModule/interfaces/Answer";
import { Player } from "../questionModule/interfaces/Player";
import { Question } from "../questionModule/interfaces/Question";

export interface UIModule {
  updateScoreboard(players: Player[]): void;
  displayScore(player: Player): void;
  displayQuestion(question: Question): void;
  selectAnswer(player: Player, question: Question, answer: Answer): void;
}


const updateScoreboard = (players: Player[]) => {
  document.getElementById("").textContent("");
}

const displayScore = (player: Player) => {
  document.getElementById("").textContent("");
}

const displayQuestion = (question: Question) => {
  document.getElementById("").textContent("");
}

const selectAnswer = (player: Player, question: Question, answer: Answer) => {
  document.getElementById("").textContent("");
}