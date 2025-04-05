// //getting the computer choice

// function getComputerChoice(){
//     const randomNumber = Math.floor(Math.random() * 3)
//     if (randomNumber === 0) {
//         return "rock"
//     } else if (randomNumber === 1) {
//         return "paper"
//     } else {
//         return "scissor"
//     }
// }

// //getting the human choice

// function getHumanChoice(){
//     const aHumanChoice = window.prompt("Type in your choice","Rock, Paper, Scissor",)
//     return aHumanChoice.toLowerCase()
// }

// const computerSelection = getComputerChoice()
// const humanSelection = getHumanChoice()

// console.log(computerSelection)
// console.log(humanSelection)


// // defining human score and computer score
// let humanScore = 0
// let computerScore = 0

// //playround code

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice){
//         console.log(`It's a tie! both of you pick ${humanChoice}`)
//     }
//     else if(
//         (humanChoice === "rock" && computerChoice === "scissor") ||
//         (humanChoice === "paper" && computerChoice === "rock") ||
//         (humanChoice === "scissor" && computerChoice === "paper"))
//         {
//             humanScore++;
//             console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
//     }
//     else {
//         computerScore++;
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//     }
// } 
// playGame(round+1);

// playRound(humanSelection,computerSelection)
// console.log(humanScore, computerScore)

//playgame function
let humanScore = 0
let computerScore = 0

function playGame(round){
    if (round > 5){
        if (humanScore > computerScore){
            console.log("Player Wins!")
        } else if(humanScore < computerScore){
            console.log("Computer Wins!")
        } else{
            console.log("It's a tie!")
        }
        return;
    }
    //get computer choice
    function getComputerChoice(){
        const randomNumber = Math.floor(Math.random() * 3)
        if (randomNumber === 0) {
            return "rock"
        } else if (randomNumber === 1) {
            return "paper"
        } else {
            return "scissor"
        }
    }
    //get human choice
    function getHumanChoice(){
        const aHumanChoice = window.prompt("Type in your choice","Rock, Paper, Scissor",)
        return aHumanChoice.toLowerCase();
    }

    //playround code

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log(`It's a tie! both of you pick ${humanChoice}`)
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    }

    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection,computerSelection);

    playGame(round+1);
} 


playGame(1);