export const updateScoreboard = (players) => {
    let container = document.getElementById("container");
    container.textContent = "";
};
export const displayScore = (player) => {
    let container = document.getElementById("container");
    container.textContent = "";
};
export const displayQuestion = (question) => {
    console.log("test123");
    let container = document.getElementById("container");
    container.textContent = "";
    let Question = document?.createElement("div");
    Question.innerHTML = question.question;
    container.appendChild(Question);
    for (let i = 0; i < question.answers.length; i++) {
        let answer = question.answers[i];
        let Answerbutton = document.createElement("button");
        Answerbutton.innerHTML = answer.answer;
        Answerbutton.id = "A-" + i;
        Answerbutton.classList = "btn btn-primary";
        Answerbutton.addEventListener("click", () => {
            console.log("Answer_div" + i + " clicked");
        });
        container.appendChild(Answerbutton);
    }
};
export const selectAnswer = (player, question, answer) => {
};
