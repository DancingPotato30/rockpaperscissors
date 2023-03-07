

function getComputerOutput() {
    let randomChoice = Math.round(Math.random() * (3 - 1) + 1);
    let computerChoice
    if(randomChoice > 3)
    {
        console.log("Randomization Issue");
    }
    if(randomChoice == 1)
    {
        computerChoice = "Rock";
    }
    else if(randomChoice == 2)
    {
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors"
    }
    return computerChoice;
}
