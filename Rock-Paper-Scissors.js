// intialize scores
let humanScore = 0
let computerScore = 0

//get buttons and add event listeners
rockButton = document.getElementById("rock")
rockButton.addEventListener("click", () =>{
    playRound("rock")
})

paperButton = document.getElementById("paper")
paperButton.addEventListener("click", () =>{
    playRound("paper")
})

scissorButton = doocument.getElementById("scissors")
scissorButton.addEventLIstener("click", ( )=>{
    playRound("scissors")
})

function getComputerChoice( ) {
   compChoice = Math.floor(Math.random() * 3)

   if (compChoice === 0){
        return ("rock")
    }

   else if (compChoice === 1) { 
        return ("paper")
    }

    else if (compChoice === 2) {
        return ("scissors")
    }
    
}

function getHumanChoice( ) {
   let choice = String (prompt("Please enter your choice of either rock paper or Scissors", "") )
   choice = choice.toLowerCase()

    if (choice ==="rock" ){
        return ("rock")
    }

    else if (choice === "paper" ) { 
        return ("paper")
    }

    else if (choice === "scissors") {
        return ("scissors")
    }

}

function playRound(humanChoice) {

    computerChoice = getcomputerChoice()

    if (humanChoice === computerChoice){
        console.log("It's a draw nobody wins")
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log ("You win " + humanChoice + " beats " + computerChoice)
        humanScore++
        console.log ("the score is " + humanScore + " for human and " + computerScore + " for computer")
    }

    else { 
        console.log ("You lose " + computerChoice + " beats " +  humanChoice)
        computerScore++
        console.log ("the score is " + humanScore + " for human and " + computerScore + " for computer")
    }

}
