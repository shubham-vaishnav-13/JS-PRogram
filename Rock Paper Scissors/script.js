const choices = ["rock", "paper", "scissors"];

const playerDiplay = document.getElementById("playerDiplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const randChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";
  if (playerChoice === randChoice) {
    result = "IT'S A TIE !";
  } else {
    switch (playerChoice) {
      case "rock":
        result = randChoice === "scissors" ? "YOU WIN !" : "YOU LOSE !";
        break;
      case "paper":
        result = randChoice === "rock" ? "YOU WIN !" : "YOU LOSE !";
        break;
      case "scissors":
        result = randChoice === "paper" ? "YOU WIN !" : "YOU LOSE !";
        break;
    }
  }
  playerDiplay.textContent = `PLAYER : ${playerChoice}`;
  computerDisplay.textContent = `Computer :${randChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText","redText");
  switch(result){
    case "YOU WIN !" : 
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    break;

    case "YOU LOSE !" : 
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    break;
  }
}
