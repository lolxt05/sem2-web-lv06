export const updateScoreboard = (players) => {
    let container = document.getElementById("container");
    container.textContent = "";
};
export const displayScore = (player) => {
    let container = document.getElementById("container");
    container.textContent = "";
};
export const displayQuestion = (question) => {
    console.log(question);
    let container = document.getElementById("container");
    container.textContent = "";
    let Question = document === null || document === void 0 ? void 0 : document.createElement("div");
    Question.innerHTML = question.question;
    container.appendChild(Question);
    for (let i = 0; i < question.answers.length; i++) {
        let answer = question.answers[i];
        let Answer_div = document.createElement("div");
        Answer_div.innerHTML = answer.answer;
        Answer_div.id = "A-" + i;
        Answer_div.addEventListener("click", () => {
            console.log("Answer_div" + i + " clicked");
        });
        container.appendChild(Answer_div);
    }
};
export const selectAnswer = (player, question, answer) => {
    let container = document.getElementById("container");
    container.textContent = "";
};
