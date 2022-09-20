import { getChoices, getComputerChoice, getOutcome } from "./game";
import { clearChildren } from "./utils";
import PaperImg from "./assets/paper.png";
import RockImg from "./assets/rock.png";
import ScissorsImg from "./assets/scissors.png";
import "./styles.css";

function makeChoiceImage(choice) {
  const image = new Image(100, 100);
  if (choice === "Scissors") {
    image.src = ScissorsImg;
  } else if (choice === "Rock") {
    image.src = RockImg;
  } else {
    image.src = PaperImg;
  }
  image.alt = choice;
  return image;
}

function setControls(content) {
  const controls = document.getElementById("controls");
  clearChildren(controls);
  controls.appendChild(content);
}

function setDescription(message) {
  const description = document.getElementById("description");
  description.innerHTML = message;
}

function prepareGame() {
  setDescription("Select Rock, Paper, or Scissors:");
  const choices = getChoices();
  const choicesElement = document.createElement("div");
  choices.forEach((choice) => {
    const choiceImage = makeChoiceImage(choice);
    choiceImage.onclick = () => playGame(choice);
    choicesElement.appendChild(choiceImage);
  });
  setControls(choicesElement);
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const outcome = getOutcome(userChoice, computerChoice);
  const outcomeElement = document.getElementById("outcome");
  clearChildren(outcomeElement);
  outcomeElement.appendChild(makeOutcome(userChoice, computerChoice, outcome));
}

function makeOutcome(userChoice, computerChoice, outcome) {
  const userOutcome = makePlayerOutcome("You chose:", userChoice);
  const computerOutcome = makePlayerOutcome("Computer chose:", computerChoice);
  const gameOutcome = document.createElement("p");
  gameOutcome.textContent = outcome;
  gameOutcome.setAttribute("class", outcome);
  const outcomeElement = document.createElement("div");
  outcomeElement.appendChild(gameOutcome);
  outcomeElement.appendChild(userOutcome);
  outcomeElement.appendChild(computerOutcome);
  outcomeElement.setAttribute("class", "active");
  return outcomeElement;
}

function makePlayerOutcome(message, choice) {
  const outcomeElement = document.createElement("div");
  const outcomeText = document.createElement("p");
  outcomeText.textContent = message;
  outcomeElement.appendChild(outcomeText);
  const outcomeImage = makeChoiceImage(choice);
  outcomeImage.setAttribute("class", "outcomeImg");
  outcomeElement.appendChild(outcomeImage);
  outcomeElement.setAttribute("class", "playerOutcome");
  return outcomeElement;
}

prepareGame();
