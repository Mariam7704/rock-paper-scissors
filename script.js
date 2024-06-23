function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);

    if(computerChoice === 0) return "rock";
    else if(computerChoice === 1) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let userChoice=prompt("Your Turn!");
    return userChoice.toLowerCase();
}

function playRound(humanSelection,computerSelection){
if(humanSelection === computerSelection){
    console.log ("It's a tie");
}
else if(humanSelection === "rock" && computerSelection === "scissors" ||
    humanSelection ==="paper" && computerSelection === "rock" ||
    humanSelection === "scissors" && computerSelection === "paper"
){
    humanScore++;
    console.log (`You win! ${humanSelection} beats ${computerSelection}`);
}
else{
    computerScore++;
    console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
}
}

function playGame(){
    for(let i=0; i<5;i++){
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        
        playRound(humanSelection,computerSelection);
        
        console.log(`Human score = ${humanScore}`);
        console.log(`Computer score = ${computerScore}`);
    }
if(computerScore>humanScore) console.log("You lose!");
else if(humanScore>computerScore) console.log("You win!");
else console.log("It's a tie!")
}
let humanScore=0;
let computerScore=0;

playGame();

