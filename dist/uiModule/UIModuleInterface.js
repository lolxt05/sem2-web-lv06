import { ScoreHandlerInterface } from "../scoringModule/ScoreHandlerInterface.js";
const ScoreHandler = new ScoreHandlerInterface();
export class UIModuleInterface {
    constructor() {
        this.updateScoreboard = (players, currentPlayer) => {
            const allFinished = players.length > 0 &&
                players.every(p => p.pair.length >= p.questions.length);
            if (allFinished) {
                this.showEndScreen(players, currentPlayer);
            }
        };
        this.showEndScreen = (players, currentPlayer) => {
            document.getElementById("score").innerHTML = "";
            document.getElementById("scoreboard").innerHTML = "";
            document.getElementById("header").style.display = "none";
            const btn = document.getElementById("new-Player");
            if (!btn.disabled)
                btn.style.display = "";
            let container = document.getElementById("container");
            container.innerHTML = "";
            let jumbotron = document.createElement("div");
            jumbotron.className = "jumbotron text-center";
            jumbotron.innerHTML = `<h2>Game Over!</h2>`;
            container.appendChild(jumbotron);
            const diffLabel = (d) => d === 1 ? "Easy" : d === 2 ? "Medium" : "Hard";
            let playerHeading = document.createElement("h4");
            playerHeading.textContent = currentPlayer.name + "'s answers";
            container.appendChild(playerHeading);
            let statsTable = document.createElement("table");
            statsTable.className = "table table-condensed table-bordered";
            let statsThead = document.createElement("thead");
            statsThead.innerHTML = "<tr><th>Question</th><th>Difficulty</th><th>Player Answer</th><th>Correct Answer</th><th>Earned</th></tr>";
            statsTable.appendChild(statsThead);
            let statsTbody = document.createElement("tbody");
            currentPlayer.pair.forEach(pair => {
                let tr = document.createElement("tr");
                tr.className = pair.answer.correct ? "success" : "danger";
                const earned = pair.answer.correct ? pair.question.difficulty : 0;
                const correctAnswer = pair.question.answers.find(a => a.correct)?.answer ?? "";
                tr.innerHTML = `<td>${pair.question.question}</td><td>${diffLabel(pair.question.difficulty)}</td><td>${pair.answer.answer}</td><td>${correctAnswer}</td><td>${earned}</td>`;
                statsTbody.appendChild(tr);
            });
            statsTable.appendChild(statsTbody);
            container.appendChild(statsTable);
            let subtitle = document.createElement("h3");
            subtitle.className = "text-center";
            subtitle.textContent = "Final Rankings";
            container.appendChild(subtitle);
            let rankTable = document.createElement("table");
            rankTable.className = "table table-striped table-bordered";
            let rankThead = document.createElement("thead");
            let headerRow = document.createElement("tr");
            ["#", "Player", "Score", "Max Score"].forEach(text => {
                let th = document.createElement("th");
                th.textContent = text;
                headerRow.appendChild(th);
            });
            let percentTh = document.createElement("th");
            let sortAsc = true;
            percentTh.textContent = "% ▲";
            percentTh.style.cursor = "pointer";
            percentTh.addEventListener("click", () => {
                sortAsc = !sortAsc;
                percentTh.textContent = sortAsc ? "% ▲" : "% ▼";
                const sorted = [...players].sort((a, b) => {
                    const pctA = a.max_score > 0 ? a.score / a.max_score : 0;
                    const pctB = b.max_score > 0 ? b.score / b.max_score : 0;
                    return sortAsc ? pctB - pctA : pctA - pctB;
                });
                renderRankTbody(sorted);
            });
            headerRow.appendChild(percentTh);
            rankThead.appendChild(headerRow);
            rankTable.appendChild(rankThead);
            let rankTbody = document.createElement("tbody");
            rankTable.appendChild(rankTbody);
            const renderRankTbody = (sorted) => {
                rankTbody.innerHTML = "";
                sorted.forEach((player, index) => {
                    let row = document.createElement("tr");
                    if (player === currentPlayer)
                        row.className = "success";
                    const pct = player.max_score > 0
                        ? (player.score / player.max_score * 100).toFixed(1) + "%"
                        : "0%";
                    row.innerHTML = `<td>${index + 1}</td><td>${player.name}</td><td>${player.score}</td><td>${player.max_score}</td><td>${pct}</td>`;
                    rankTbody.appendChild(row);
                });
            };
            renderRankTbody(players);
            container.appendChild(rankTable);
        };
        this.displayScore = (player) => {
            let score_div = document.getElementById("score");
            ScoreHandler.calculateScore(player);
            score_div.textContent =
                player.name +
                    " has " +
                    player.score +
                    " out of: " +
                    player.max_score +
                    " points";
        };
        this.displayQuestion = (player, game) => {
            const btn = document.getElementById("new-Player");
            if (player.pair.length >= player.questions.length) {
                return false;
            }
            btn.style.display = "none";
            document.getElementById("header").style.display = "";
            let question = player.questions[player.pair.length];
            let container = document.getElementById("container");
            container.innerHTML = "";
            let questionText = document.createElement("h3");
            questionText.className = "text-center";
            questionText.textContent = question.question;
            container.appendChild(questionText);
            let row = document.createElement("div");
            row.className = "row";
            for (let i = 0; i < question.answers.length; i++) {
                let answer = question.answers[i];
                let col = document.createElement("div");
                col.className = "col-xs-6";
                let panel = document.createElement("a");
                panel.className = "answer-card";
                panel.textContent = answer.answer;
                col.appendChild(panel);
                row.appendChild(col);
                panel.addEventListener("click", () => {
                    this.selectAnswer(player, question, answer);
                    this.displayQuestion(player, game);
                    this.displayScore(player);
                    this.updateScoreboard(ScoreHandler.calculateScoreboard(game), player);
                });
            }
            container.appendChild(row);
            return true;
        };
        this.selectAnswer = (player, question, answer) => {
            let pair = {
                question,
                answer,
            };
            player.pair.push(pair);
            ScoreHandler.increaseScore(player, question.difficulty);
        };
    }
}
