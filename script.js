const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");
const playerScore = document.getElementById("player-counter");
const computerScore = document.getElementById("comp-counter");
const feedback = document.querySelector(".feedback");

let cScore = 0;
let pScore = 0;

rock.addEventListener("click", function() {
    playRound("ROCK");
})

paper.addEventListener("click", function() {
    playRound("PAPER");
})

scissors.addEventListener("click", function() {
    playRound("SCISSORS");
})

reset.addEventListener("click", function() {
    cScore = 0;
    pScore = 0;
    computerScore.innerHTML = cScore;
    playerScore.innerHTML = pScore;
    console.log(cScore + " " + pScore);
    feedback.innerHTML = "Game reset";
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
                draw();
                break;
                    
            case "ROCKSCISSORS":
            case "PAPERROCK":
            case "SCISSORSPAPER":
                loss();
                break;
        
            case "SCISSORSROCK":
            case "ROCKPAPER":
            case "PAPERSCISSORS":
                win();
                break;
        }
    }
}

function win() {
    pScore++;
    playerScore.innerHTML = pScore;
    feedback.style.color = "green";
    if (cScore === 5) {
        feedback.innerHTML = "You WON the game";
    } else {
        feedback.innerHTML = "You won that round!";
    }
}

function loss() {
    cScore++;
    computerScore.innerHTML = cScore;
    feedback.style.color = "red";
    if (cScore === 5) {
        feedback.innerHTML = "You LOST the game";
    } else {
        feedback.innerHTML = "You lost that round!";
    }
}

function draw() {
    feedback.style.color = "white";
    feedback.innerHTML = "Draw - No points awarded";
}
