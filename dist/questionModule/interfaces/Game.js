import { createPlayer } from "./Player.js";
import { UIModuleInterface } from "../../uiModule/UIModuleInterface.js";
export class Game {
    constructor(questions) {
        this.players = [];
        this.ui = new UIModuleInterface();
        this.maxPlayers = 5;
        this.question = questions;
    }
    addPlayer() {
        if (this.players.length >= this.maxPlayers)
            return;
        const player = createPlayer();
        player.questions = this.question.getFiveQuestions();
        this.players.push(player);
        this.ui.displayQuestion(player, this);
        if (this.players.length >= this.maxPlayers) {
            const btn = document.getElementById("new-Player");
            btn.disabled = true;
            btn.textContent = "Max players reached";
        }
    }
    start() {
        document.getElementById("new-Player")?.addEventListener("click", () => {
            this.addPlayer();
        });
    }
}
