"use strict";
const restart = document.querySelector(".again");
let number = document.querySelector(".number");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
let body = document.querySelector("body");

let score = 20;
let scoreHigh = 0;

const displayMessage = (msg) => {
  message.textContent = msg;
};
function scoreOutput(scores) {
  scoreElement.textContent = scores;
}

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("😕 Input box cannot be empty");
  } else if (guess === hiddenNumber) {
    displayMessage("🎉Correct number!");
    scoreOutput(score);
    number.textContent = hiddenNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (score > scoreHigh) {
      scoreHigh = score;
      highScore.textContent = scoreHigh;
    } else {
      console.log("scoreHigh");
    }
  } else if (guess !== hiddenNumber) {
    if (score > 1) {
      displayMessage(guess > hiddenNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreOutput(score);
    } else {
      displayMessage("🤦‍♂️ you lost the game");
      scoreOutput(0);
    }
  }
});

restart.addEventListener("click", function () {
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  message.textContent = "🎈 Start Guessing...";
  scoreOutput(score);
  number.textContent = "?";
  document.querySelector(".guess").value = null;
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
