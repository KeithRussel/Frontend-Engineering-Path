let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate Random number from 0-9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Determine which player wins based on which guess is closest to the target
const compareGuesses = (human, computer, target) => {
  target = generateTarget();
  computer = generateTarget();
  let humanAbs = Math.abs(human - target);
  let compAbs = Math.abs(computer - target);

  if (human >= 0 && human <= 9) {
    if (humanAbs <= compAbs) {
      return true;
    } else {
      return false;
    }
  } else {
    window.alert("Number is out of range");
  }
};

// Update and increase winner score
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

// Update the round number
const advanceRound = () => {
  currentRoundNumber++;
};

// compareGuesses();
