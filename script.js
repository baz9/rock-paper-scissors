const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const start = document.getElementById("start-game");
const playerScore = document.getElementById("player-counter");
const computerScore = document.getElementById("comp-counter");
let cScore = 0;
let pScore = 0;

function main() {
    rock.addEventListener("click", function() {
        playRound("ROCK");
    })

    paper.addEventListener("click", function() {
        playRound("PAPER");
    })

    scissors.addEventListener("click", function() {
        playRound("SCISSORS");
    })
}

start.addEventListener("click", function() {
    cScore = 0;
    pScore = 0;
    computerScore.innerHTML = cScore;
    playerScore.innerHTML = pScore;
    console.log(cScore + " " + pScore);
})

function getComputerSelection() {
    let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
    let computerAnswer = rockPaperScissors[Math.floor(Math.random() * 3)];
        return computerAnswer;
    }

function playRound(player) {
    if (cScore < 5 && pScore < 5) {
        let computer = getComputerSelection();
        switch (computer + player) {
            case "ROCKROCK":
            case "PAPERPAPER":
            case "SCISSORSSCISSORS":
                break;
                    
            case "ROCKSCISSORS":
            case "PAPERROCK":
            case "SCISSORSPAPER":
                cScore++;
                playerScore.innerHTML = cScore;
                break;
        
            case "SCISSORSROCK":
            case "ROCKPAPER":
            case "PAPERSCISSORS":
                pScore++;
                computerScore.innerHTML = pScore;
                break;
        }
    }
}

main();
