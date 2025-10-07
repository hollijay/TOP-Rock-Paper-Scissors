// intialize scores
let humanScore = 0
let computerScore = 0


const messageContainer=document.getElementById("messages")

//get buttons and add event listeners
const rockButton = document.getElementById("rock")
rockButton.addEventListener("click", () =>{
    playRound("rock")
})

const paperButton = document.getElementById("paper")
paperButton.addEventListener("click", () =>{
    playRound("paper")
})

const scissorButton = document.getElementById("scissors")
scissorButton.addEventListener("click", ( )=>{
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
    

    computerChoice = getComputerChoice()

    if (humanChoice === computerChoice){
        messageContainer.textContent = "it's a draw nobody wins"
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        messageContainer.textContent = ("You win " + humanChoice + " beats " + computerChoice)
        humanScore++
        messageContainer.textContent = ("the score is " + humanScore + " for human and " + computerScore + " for computer")
    }

    else { 
        messageContainer.textContent = ("You lose " + computerChoice + " beats " +  humanChoice)
        computerScore++
        messageContainer.textContent = ("the score is " + humanScore + " for human and " + computerScore + " for computer")
    }
    
    if (humanScore == 5){
        messageContainer.textContent = ("Yay you won")
        humanScore = 0
        computerScore = 0
    }
    else if (computerScore ==5){
        messageContainer.textContent = ("Sorry the computer won")
        computerScore = 0 
        humanScore = 0
    }


}
