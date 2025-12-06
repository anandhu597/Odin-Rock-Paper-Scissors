let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const value = Math.random();
  if (value < 0.33) return "rock";
  else if (value < 0.66) return "paper";
  return "scissors";
}

function getHumanChoice() {
  const input = prompt("Enter your choice:");
  return input;
}

function playRound(humanChoice, computerChoice) {
  if (!humanChoice) {
    return "No input provided";
  }

  humanChoice = humanChoice.toLowerCase().trim();

  console.log("Human:", humanChoice);
  console.log("Computer:", computerChoice);

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

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const result = playRound(getHumanChoice(), getComputerChoice());
    alert(result);
    console.log("Score - Human:", humanScore, "Computer:", computerScore);
  }

  if (humanScore > computerScore) {
    alert(`Congratulations! You won the game.
Human Score: ${humanScore}
Computer Score: ${computerScore}`);
  } else if (humanScore < computerScore) {
    alert(`Sorry! You lose the game.
Human Score: ${humanScore}
Computer Score: ${computerScore}`);
  } else {
    alert(`It's a tie game!
Human Score: ${humanScore}
Computer Score: ${computerScore}`);
  }
}

playGame();
