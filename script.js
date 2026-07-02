// ____________Global variables_________________

let humanScore = 0;
let computerScore = 0;

// ____________Game logic functions_________________

function getComputerChoice() {
  const value = Math.random();
  if (value < 0.33) return "rock";
  else if (value < 0.66) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase().trim();

  if (humanChoice === computerChoice) return "It's a tie!";

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats Scissors";
  }
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats Rock";
  }
  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper";
  }

  return "Invalid choice, please enter rock, paper, or scissors";
}

// ____________UI creation_________________

// Container
const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

// Title
const title = document.createElement("h1");
title.textContent = "Rock Paper Scissors";
title.id = "title";
container.appendChild(title);

// Choice buttons
const btnDiv = document.createElement("div");
btnDiv.id = "btnDiv";

const rBtn = document.createElement("button");
rBtn.textContent = "Rock";

const pBtn = document.createElement("button");
pBtn.textContent = "Paper";

const sBtn = document.createElement("button");
sBtn.textContent = "Scissors";

btnDiv.appendChild(rBtn);
btnDiv.appendChild(pBtn);
btnDiv.appendChild(sBtn);
container.appendChild(btnDiv);

// New game button (hidden until game over)
const newGame = document.createElement("button");
newGame.textContent = "NEW GAME";
newGame.id = "newGame";

// Choice display
const choiceDive = document.createElement("div");
choiceDive.id = "choiceDive";

const choices = document.createElement("p");
choices.id = "choices";

const currentWin = document.createElement("p");
currentWin.id = "currentWin";
currentWin.textContent = "PLAY NOW";

choiceDive.appendChild(choices);
choiceDive.appendChild(currentWin);
container.appendChild(choiceDive);

// Score display
const resultDiv = document.createElement("div");
resultDiv.id = "resultDiv";

const humanScorePara = document.createElement("p");
humanScorePara.id = "humanScorePara";
humanScorePara.textContent = "Human Score : " + humanScore;
resultDiv.appendChild(humanScorePara);

const computerScorePara = document.createElement("p");
computerScorePara.id = "computerScorePara";
computerScorePara.textContent = "Computer Score : " + computerScore;
resultDiv.appendChild(computerScorePara);

container.appendChild(resultDiv);

// ____________Event listeners_________________

rBtn.addEventListener("click", () => handleChoice("rock"));
pBtn.addEventListener("click", () => handleChoice("paper"));
sBtn.addEventListener("click", () => handleChoice("scissors"));
newGame.addEventListener("click", playGame);

// ____________Helper functions_________________

// Single handler for all three buttons
function handleChoice(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);
  updateChoiceDisplay(humanChoice, computerChoice, result);
}

// Update the choice and result text
function updateChoiceDisplay(humanChoice, computerChoice, result) {
  choices.textContent =
    "Human : " + humanChoice + "  |  Computer : " + computerChoice;
  currentWin.textContent = result;

  // Color feedback based on result
  if (result.includes("win")) {
    currentWin.style.color = "#4caf50"; // green
  } else if (result.includes("lose")) {
    currentWin.style.color = "#e74c3c"; // red
  } else {
    currentWin.style.color = "white"; // tie
  }

  updateScoreDisplay();
  checkIfGameOver();
}

// Refresh score paragraphs
function updateScoreDisplay() {
  humanScorePara.textContent = "Human Score : " + humanScore;
  computerScorePara.textContent = "Computer Score : " + computerScore;
}

// Check if either player has reached 5 points
function checkIfGameOver() {
  if (humanScore >= 5) {
    choices.classList.add("gameOver");
    choices.textContent = "GAME OVER";
    currentWin.textContent = "Human Wins the Game";
    endGame();
  } else if (computerScore >= 5) {
    choices.classList.add("gameOver");
    choices.textContent = "GAME OVER";
    currentWin.textContent = "Computer Wins the Game";
    endGame();
  }
}

// Hide buttons and show new game option
function endGame() {
  container.removeChild(btnDiv);
  container.insertBefore(newGame, choiceDive);
}

// ____________Start / Restart the game_________________

function playGame() {
  // Restore buttons, remove new game button
  container.insertBefore(btnDiv, choiceDive);
  container.removeChild(newGame);

  // Reset scores
  humanScore = 0;
  computerScore = 0;

  // Reset display
  choices.textContent = "";
  choices.classList.remove("gameOver");
  currentWin.textContent = "PLAY NOW";
  currentWin.style.color = "white";
  updateScoreDisplay();
}
