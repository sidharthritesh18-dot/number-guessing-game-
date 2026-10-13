let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 100;
let gameFinished = false;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const scoreDisplay = document.getElementById("score");

function checkGuess() {
  if (gameFinished) {
    message.textContent = "The game is finished. Click New Game to play again.";
    return;
  }

  const guess = Number(guessInput.value);

  if (guess < 1 || guess > 100 || !guess) {
    message.textContent = "Please enter a number from 1 to 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (guess === secretNumber) {
    message.textContent = `Correct! You guessed the number in ${attempts} attempt(s)!`;
    score = Math.max(100 - (attempts - 1) * 10, 10);
    scoreDisplay.textContent = score;
    gameFinished = true;
  } else if (guess < secretNumber) {
    message.textContent = "Too low. Try again.";
  } else {
    message.textContent = "Too high. Try again.";
  }
}

function startNewGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  score = 100;
  gameFinished = false;

  guessInput.value = "";
  attemptsDisplay.textContent = attempts;
  scoreDisplay.textContent = score;
  message.textContent = "Make your first guess!";
}

guessButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", startNewGame);
