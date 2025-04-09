let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    const scoreBoard = document.getElementById('score');

    if (humanChoice === computerChoice){
        resultDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    scoreBoard.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    round++;

    if (round > 5) {
        if (humanScore > computerScore) {
            resultDiv.textContent += "\nGame Over! You Win the Game!";
        } else if (humanScore < computerScore) {
            resultDiv.textContent += "\nGame Over! Computer Wins the Game!";
        } else {
            resultDiv.textContent += "\nGame Over! It's a Tie!";
        }

        // Disable buttons after game ends
        document.querySelectorAll('button').forEach(button => button.disabled = true);
    }
}

document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissor').addEventListener('click', () => playRound('scissor', getComputerChoice()));
