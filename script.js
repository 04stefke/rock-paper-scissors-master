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
			houseChoiceImg.src =
				computerChoice === "scissors"
					? "images/icon-scissors.svg"
					: "images/icon-paper.svg";
			break;

		case "paper":
			playerChoiceImg.src = "images/icon-paper.svg";
			houseChoiceImg.src =
				computerChoice === "rock"
					? "images/icon-rock.svg"
					: "images/icon-scissors.svg";
			break;

		case "scissors":
			playerChoiceImg.src = "images/icon-scissors.svg";
			houseChoiceImg.src =
				computerChoice === "paper"
					? "images/icon-paper.svg"
					: "images/icon-rock.svg";
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
	} else {
		result = "House wins!";
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
}
