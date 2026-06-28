//____________Global variables_________________

let humanScore = 0;
let computerScore = 0;

//____________Game logic functions_________________

function getComputerChoice() {
  const value = Math.random();
  if (value < 0.33) return "rock";
  else if (value < 0.66) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  // if (!humanChoice) {
  //   return "No input provided";
  // }

  humanChoice = humanChoice.toLowerCase().trim();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

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

//____________UI creation_________________

//Create buttons

const btnDiv = document.createElement("div");
const rBtn = document.createElement("button");
rBtn.textContent = "Rock";
const pBtn = document.createElement("button");
pBtn.textContent = "Paper";

const sBtn = document.createElement("button");
sBtn.textContent = "Scissors";

btnDiv.appendChild(rBtn);
btnDiv.appendChild(pBtn);
btnDiv.appendChild(sBtn);

document.body.appendChild(btnDiv);

// Create choice display
const choiceDive = document.createElement("div");
const choices = document.createElement("p");
const currentWin = document.createElement("p");

currentWin.textContent = "PLAY NOW";

choiceDive.appendChild(choices);
choiceDive.appendChild(currentWin);
document.body.appendChild(choiceDive);

// Create score display

const resultDiv = document.createElement("div");

const humanScorePara = document.createElement("p");
humanScorePara.textContent = "Human Score :" + humanScore;
resultDiv.appendChild(humanScorePara);

const computerScorePara = document.createElement("p");
computerScorePara.textContent = "Computer Score :" + computerScore;
resultDiv.appendChild(computerScorePara);

document.body.appendChild(resultDiv);

// new game button
const newGame = document.createElement("button");
newGame.innerText = "NEW GAME";

//____________Event listeners_________________

rBtn.addEventListener("click", rockClicked);
pBtn.addEventListener("click", paperClicked);
sBtn.addEventListener("click", scissorsClicked);

//____________Helper functions_________________

function rockClicked() {
  const humanChoice = "rock";
  const computerChoice = getComputerChoice();
  let result = playRound(humanChoice, computerChoice);
  updateChoiceDisplay(humanChoice, computerChoice, result);
}

function paperClicked() {
  const humanChoice = "paper";
  const computerChoice = getComputerChoice();
  let result = playRound(humanChoice, computerChoice);
  updateChoiceDisplay(humanChoice, computerChoice, result);
}

function scissorsClicked() {
  const humanChoice = "scissors";
  const computerChoice = getComputerChoice();
  let result = playRound(humanChoice, computerChoice);
  updateChoiceDisplay(humanChoice, computerChoice, result);
}

// Update choice display

function updateChoiceDisplay(humanChoice, computerChoice, result) {
  choices.textContent =
    "Human: " + humanChoice + " |" + "  Computer: " + computerChoice;
  currentWin.textContent = result;
  updateTheScoreDisplay();
}

// Update score display

function updateTheScoreDisplay() {
  humanScorePara.textContent = "Human Score :" + humanScore;
  computerScorePara.textContent = "Computer Score :" + computerScore;
  checkIfGameOver();
}
// Check if game is over
function checkIfGameOver() {
  if (humanScore >= 5) {
    choices.textContent = "GAME OVER";
    currentWin.textContent = "Human Own The game ";
    removeEvents();
  } else if (computerScore >= 5) {
    choices.textContent = "GAME OVER";
    currentWin.textContent = "Computer Own The game ";
    removeEvents();
  }
}

function removeEvents() {
  rBtn.removeEventListener("click", rockClicked);
  pBtn.removeEventListener("click", paperClicked);
  sBtn.removeEventListener("click", scissorsClicked);
  playNewGame();
}

function playNewGame() {
  newGame.addEventListener("click", playGame);

  document.body.appendChild(newGame);
}
//____________Start the game_________________

function playGame() {
  humanScore = 0;
  computerScore = 0;
  updateChoiceDisplay();
  currentWin.textContent = "PLAY NOW";
  choices.textContent = "";
}
