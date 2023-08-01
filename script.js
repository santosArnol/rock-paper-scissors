//Generate a random number (1-3), each stand for a respective choice
//Return choice as a string

let getComputerChoice = () => {
    const ranNum = Math.floor(Math.random()*3)+1;
    switch (ranNum) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"                     
    }
}