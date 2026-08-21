let secretNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");

function checkGuess() {
  const guess = Number(guessInput.value);

  if (guess < 1 || guess > 100 || !guess) {
    message.textContent = "Please enter a number from 1 to 100.";
  } else if (guess === secretNumber) {
    message.textContent = "Correct! You guessed the number!";
  } else if (guess < secretNumber) {
    message.textContent = "Too low. Try again.";
  } else {
    message.textContent = "Too high. Try again.";
  }
}

function startNewGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  message.textContent = "Make your first guess!";
}

guessButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", startNewGame);
