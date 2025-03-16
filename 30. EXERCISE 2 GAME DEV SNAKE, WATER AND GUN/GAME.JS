// Function to get computer's random choice
function getRandomChoice() {
    let choices = ["S", "W", "G"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a Tie!";
    }
    if (
        (user === "S" && computer === "W") || 
        (user === "W" && computer === "G") || 
        (user === "G" && computer === "S")
    ) {
        return "Congratulations! You Win!";
    } else {
        return "Oops! You Lost. Try Again!";
    }
}

// Function to play the game
function playGame() {
    let playAgain = true;

    while (playAgain) {
        let userChoice = prompt("Enter your choice: S for Snake, W for Water, G for Gun").toUpperCase();

        // Validate user input
        if (!["S", "W", "G"].includes(userChoice)) {
            alert("Invalid Choice! Please Enter S, W, or G.");
            continue;
        }

        let computerChoice = getRandomChoice();
        alert("Computer chose: " + computerChoice);

        let result = determineWinner(userChoice, computerChoice);
        alert(result);

        playAgain = confirm("Do you want to play again?");
    }
}

// Start the game
playGame();