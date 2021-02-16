    <script>
        
        function computerSelection() {
            let rockPaperScissors = ["Rock", "Paper", "Scissors"];
            let computerAnswer = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
            computerAnswer = computerAnswer.toUpperCase();
            return computerAnswer;
        }
        
        function playRound(computer, player) {
            switch (computer + player) {
                case "ROCKROCK":
                case "PAPERPAPER":
                case "SCISSORSSCISSORS":
                    return "Draw";
            
                case "ROCKSCISSORS":
                case "PAPERROCK":
                case "SCISSORSPAPER":
                    return "Lost";

                case "SCISSORSROCK":
                case "ROCKPAPER":
                case "PAPERSCISSORS":
                    return "Won";
        }
    }

    function startGame() {
            computerScore = 0;
            playerScore = 0;
            while (computerScore < 5 && playerScore < 5) {
                let computerPick = computerSelection();
                let playerPick = prompt("Pick Rock, Paper or Scissors");
                playerPick = playerPick.toUpperCase();
                if (playRound(computerPick, playerPick) === "Won") {
                    playerScore++;
                    console.log(`Player now has ${playerScore} points`)
                } else if (playRound(computerPick, playerPick) === "Lost") {
                    computerScore++;
                    console.log(`Computer now has ${computerScore} points`)
                } else {
                    console.log("No winner that round!")
                }
            }
            return `The final score is ${computerScore} to the computer and ${playerScore} to the player`

        }

    console.log(startGame());

    </script>
