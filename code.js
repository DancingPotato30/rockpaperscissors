

function getComputerOutput() {
    let randomChoice = Math.round(Math.random() * (3 - 1) + 1);
    let computerChoice
    if(randomChoice > 3)
    {
        console.log("Randomization Issue");
    }
    if(randomChoice == 1)
    {
        computerChoice = "rock";
    }
    else if(randomChoice == 2)
    {
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getPlayerInput()
{
    let playerInput
    
    return playerInput;
}

function win()
{
    return "You win! " + playerChoice + " beats " + computerChoice;
}

function lose()
{
    return "You lose.. " + computerChoice + " beats " + playerChoice;
}

function checkResult(bot, player)
{
    if(bot == player)
    {
        return "Draw!";
    }

    //bot
    switch (bot) {
        //bot gets rock
        case "rock":
            //player
           switch (player) {
                case "paper":
                    return win();
                    break;
           
                case "scissors":
                    return lose();
                    break;
                }
            break;
           
        //bot gets scissors
        case "scissors":
            switch (player) {
                case "rock":
                    return win();
                    break;
               
                case "paper":
                    return lose();
                    break;
               }
            break;

        //bot gets paper
        case "paper":
            switch (player) {
                case "scissors":
                    return win();
                    break;
               
                case "rock":
                    return lose();
                    break;
               }
            break;
        
    }
}

function playRound()
{
    //player input
    playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();

    //player input error check
    if(!(playerChoice == "rock" || playerChoice == "scissors" || playerChoice == "paper"))
    {
        alert("Error! Input either rock, paper, or scissors!");
        playRound();
    }
    else{
        //bot output
    computerChoice = getComputerOutput();

    //result
    console.log(checkResult(computerChoice, playerChoice));
    }
    
}

function game()
{
    replay = prompt("How many rounds?");
    for (let i = 0; i < replay; i++) {
        playRound();
        
    }
}

let playerChoice;
let computerChoice;
let replay;

game();
