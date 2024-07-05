function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);

    if(computerChoice === 0) return "Rock";
    else if(computerChoice === 1) return "Paper";
    else return "Scissors";
}


function playRound(humanSelection,computerSelection){
    const winner=document.querySelector("#winner");
    if(humanSelection === computerSelection){
    winner.textContent="It's a tie";
}
else if(humanSelection === "Rock" && computerSelection === "Scissors" ||
    humanSelection ==="Paper" && computerSelection === "Rock" ||
    humanSelection === "Scissors" && computerSelection === "Paper"
){
    humanScore++;
    winner.textContent= `You win! ${humanSelection} beats ${computerSelection}`;
}
else{
    computerScore++;
    winner.textContent=`You lose! ${computerSelection} beats ${humanSelection}`;
}
}

function resetText(){
    hSelection.textContent = "You chose: ";
    cSelection.textContent = "Computer chose: ";
    hScore.textContent = "Human score: ";
    cScore.textContent = "Computer score: ";
    winner.textContent="";
    finalWinner.textContent="";
}

function resetGame(){
    resetText();
    enableButtons();
    
    rounds=0;
    computerScore=0;
    humanScore=0;
}

function playGame(e){
    resetText();
    
    if(rounds===5){
        resetGame();
    }
    const computerSelection = getComputerChoice();
    const humanSelection = e.target.id;

    playRound(humanSelection, computerSelection);

    hSelection.textContent += humanSelection;
    cSelection.textContent += computerSelection;
    hScore.textContent += humanScore;
    cScore.textContent += computerScore;

    rounds++;

    if(rounds===5){
        if(humanScore>computerScore) finalWinner.textContent="Game over, You win!";
        else if(computerScore>humanScore) finalWinner.textContent="Game over, You lose!";
        else finalWinner.textContent="Game over, It's a tie";
        
        disableButtons();
    }

}

function disableButtons() {
    buttons.forEach(button => {
        if (button.id !== "newGame") {
            button.disabled = true;
        }
    });
}

function enableButtons() {
    buttons.forEach(button => {
        if (button.id !== "newGame") {
            button.disabled = false;
        }
    });
}

let humanScore=0;
let computerScore=0;
let rounds=0

const hSelection=document.querySelector("#hSelection");
const cSelection=document.querySelector("#cSelection");
const hScore=document.querySelector("#hScore");
const cScore=document.querySelector("#cScore");
const finalWinner=document.querySelector("#finalWinner");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", playGame);
});

const newGameBtn=document.querySelector("#newGame");
newGameBtn.addEventListener("click",resetGame);


