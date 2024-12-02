const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const playerDisplayWrapper = document.getElementById("playerChoice");
const playerChoses = document.getElementById("playerChoses");
const computerDisplay = document.getElementById("computerDisplay");
const computerDisplayWrapper = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultMessage");
const resultDisplayWrapper = document.getElementById("result");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    playerDisplay.textContent = `You Picked: ${playerChoice}`;
    computerDisplay.textContent = `The House Picked: ${computerChoice}`;

    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Player wins!";
    } else {
        result = "Computer wins!";
    }

    resultDisplay.textContent = result;
    playerChoses.classList.add("hidden");
    playerDisplayWrapper.classList.remove("hidden");
    computerDisplayWrapper.classList.remove("hidden");
    resultDisplayWrapper.classList.remove("hidden");
}