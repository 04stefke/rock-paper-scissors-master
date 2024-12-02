const choices = ["rock", "paper", "scissors"];
const choiceResults = document.getElementById("choiceResults");
const playerDisplay = document.getElementById("playerDisplay");
const playerDisplayWrapper = document.getElementById("playerChoice");
const playerChoses = document.getElementById("playerChoses");
const computerDisplay = document.getElementById("computerDisplay");
const computerDisplayWrapper = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultMessage");
const resultDisplayWrapper = document.getElementById("result");

const playerChoiceImg = document.getElementById("playerChoiceImg");
const houseChoiceImg = document.getElementById("houseChoiceImg");

const scoreCount = document.getElementById("score-counter");
let score = 0;
function playGame(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];

	let result = "";

	switch (playerChoice) {
		case "rock":
			playerChoiceImg.src = "images/icon-rock.svg";
			playerDisplay.classList.add("chosenRock"); // Add the 'rock' class to the player's image

			if (computerChoice === "scissors") {
				houseChoiceImg.src = "images/icon-scissors.svg";
				computerDisplay.classList.add("chosenScissors"); // Add the 'scissors' class to the house's image
			} else {
				houseChoiceImg.src = "images/icon-paper.svg";
				computerDisplay.classList.add("chosenPaper"); // Add the 'paper' class to the house's image
			}
			break;

		case "paper":
			playerChoiceImg.src = "images/icon-paper.svg";
			playerDisplay.classList.add("chosenPaper"); // Add the 'paper' class to the player's image

			if (computerChoice === "rock") {
				houseChoiceImg.src = "images/icon-rock.svg";
				computerDisplay.classList.add("chosenRock"); // Add the 'rock' class to the house's image
			} else {
				houseChoiceImg.src = "images/icon-scissors.svg";
				computerDisplay.classList.add("chosenScissors"); // Add the 'scissors' class to the house's image
			}
			break;

		case "scissors":
			playerChoiceImg.src = "images/icon-scissors.svg";
			playerDisplay.classList.add("chosenScissors"); // Add the 'scissors' class to the player's image

			if (computerChoice === "paper") {
				houseChoiceImg.src = "images/icon-paper.svg";
				computerDisplay.classList.add("chosenPaper"); // Add the 'paper' class to the house's image
			} else {
				houseChoiceImg.src = "images/icon-rock.svg";
				computerDisplay.classList.add("chosenRock"); // Add the 'rock' class to the house's image
			}
			break;
	}

	// Determine the result
	if (playerChoice === computerChoice) {
		result = "It's a tie!";
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		result = "You win!";
		score++;
		updateScore();
		playerDisplay.classList.add("winner");
	} else {
		result = "House wins!";
		computerDisplay.classList.add("winner");
	}

	// Display the result
	resultDisplay.textContent = result;

	// Show the player and computer choices
	playerChoses.classList.add("hidden");
	resultDisplayWrapper.classList.remove("hidden");
	choiceResults.classList.remove("hidden");
	playerDisplayWrapper.classList.remove("hidden");
	computerDisplayWrapper.classList.remove("hidden");
}

function playAgain() {
	resultDisplayWrapper.classList.add("hidden");
	choiceResults.classList.add("hidden");
	playerChoses.classList.remove("hidden");
	playerDisplayWrapper.classList.add("hidden");
	computerDisplayWrapper.classList.add("hidden");
	playerDisplay.classList.remove(
		"chosenRock",
		"chosenPaper",
		"chosenScissors",
		"winner"
	); 
	computerDisplay.classList.remove(
		"chosenRock",
		"chosenPaper",
		"chosenScissors",
		"winner"
	);
}

function updateScore() {
	scoreCount.textContent = score;
}
