import { Game } from "./questionModule/interfaces/Game.js";
import { QuestionBank } from "./questionModule/interfaces/QuestionBank.js";

const bank = new QuestionBank();
await bank.load("questions.json");

const game = new Game(bank);
game.start();