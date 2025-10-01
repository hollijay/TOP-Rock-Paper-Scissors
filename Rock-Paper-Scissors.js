let humanScore = 0
let computerScore = 0


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

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

function playRound(humanChoice, computerChoice) {

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
    }

    else { 
        console.log ("You lose " + computerChoice + " beats " +  humanChoice)
        computerScore++
    }


}