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





const playRound = () => {
    alert('clicked');
}

const options = document.querySelectorAll('.option');

options.forEach(element => {
    element.addEventListener('clicked',playRound);
});



// PROGRAM STARTS