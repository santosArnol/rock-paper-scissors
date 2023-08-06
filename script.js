const matchupResults = {
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
        paper: "It's a draw...",
    }
}

let score = {
    player:0,
    pc:0,
}

const options = document.querySelectorAll('.option');

const resultContainer = document.querySelector('.resultContainer');
const resultChoicePlayer = document.querySelector('.resultChoicePlayer');
const resultChoicePC = document.querySelector('.resultChoicePC');
const resultExplain = document.querySelector('.resultExplain');
const resultScore = document.querySelector('.resultScore');

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

const getPlayerChoice = (e) => e.target.getAttribute("data-option");

const keepScore = (result,score) =>{
    if (result.includes("WIN")){
        score.player++;
    }
    else if (result.includes("lose")){
        score.pc++;       
    }
}

const endGame = () => {
    options.forEach(element => {
        element.removeEventListener('click',playRound);        
    });

    const finalResult = document.createElement('p');
    if (score.player == 5){
        finalResult.textContent = "YOU WIN " + score.player + " - " +score.pc;;
    }
    else {
        finalResult.textContent = "YOU LOSE " + score.player + " - " +score.pc;;
    }

    const resultContents = document.querySelectorAll('.resultContainer > *');
    resultContents.forEach(element => {
        element.remove();        
    });
        
    resultContainer.append(finalResult);
    

}




const playRound = (e) => {

    const updateDisplay = () => {
        resultChoicePlayer.textContent = "You chose "+ playerChoice;
        resultChoicePC.textContent = "PC chose "+ computerChoice;    
        resultExplain.textContent = matchupResults[playerChoice][computerChoice];
        resultScore.textContent = score.player + " - " +score.pc;



    }    
    
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice(e);
    
    result = matchupResults[playerChoice][computerChoice];
    
    keepScore(result,score)

    updateDisplay();
    
    if (score.pc == 5 || score.player == 5){
        endGame();
    }

}



options.forEach(element => {
    element.addEventListener('click',playRound);
});


// PROGRAM STARTS