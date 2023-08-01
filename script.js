let results = {
    scissors: {
        rock: "You lose!",
        paper: "You WIN!",
        scissors: "It's a draw..."
    },
    rock: {
        paper: "You lose!",
        scissors: "You WIN!",
        rock: "It's a draw..."
    },
    paper: {
        scissors: "You lose!",
        rock: "You WIN!",
        paper: "It's a draw..."
    }

}

//Generate a random number (1-3), each stand for a respective choice
//Return choice as a string

const getComputerChoice = () => {
    const ranNum = Math.floor(Math.random() * 3) + 1;
    switch (ranNum) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

/*let playRound = (playerSelection, computerSelection,) => {
    console.log("PC choice was " + computerSelection)
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                return "Draw";

            case "paper":
                return "You Lose!";

            case "scissors":
                return "You Win!";
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "paper":
                return "Draw";

            case "scissors":
                return "You Lose!";

            case "rock":
                return "You Win!";
        }
    }
    else {
        switch (computerSelection) {
            case "scissors":
                return "Draw";

            case "rock":
                return "You Lose!";

            case "paper":
                return "You Win!";
        }
    }
}
*/
const playRound = (playerSelection, computerSelection) => {
    console.log("PC choice was " + computerSelection);
    console.log("Your choice was " + playerSelection);
    return results[playerSelection][computerSelection];
}

const getPlayerChoice = () => {

    let playerSelection = prompt("Make Your Choice: ").toLowerCase();

    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        playerSelection = prompt("A VALID Choice: ").toLowerCase();
    }

    return playerSelection;
}

// PROGRAM STARTS


playRound(getPlayerChoice(), getComputerChoice());