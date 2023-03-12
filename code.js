

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
    playerPoints++
    playerScore.textContent = `${playerPoints}`;
    return "You win! " + playerChoice + " beats " + computerChoice;
}

function lose()
{
    botPoints++
    computerScore.textContent = `${botPoints}`;
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
    newRound = false;
    //bot output
    computerChoice = getComputerOutput();

    //result
    finalResult.textContent = checkResult(computerChoice, playerChoice);

    if (botPoints == 5) {
        gameEnd("bot");
    }
    else if(playerPoints == 5) {
        gameEnd("player");
    }
    
    
}

function gameEnd(winner) {
    

    const restart = document.createElement('button');

    if (winner == "bot") {
        finalResult.textContent = "Aww.. The bot wins this time!";
    }
    else if (winner == "player") {
        finalResult.textContent = "Congratulations! You won!!";
    }
    newRound = true;
    finalContainer.appendChild(replayBtn);

    rock.style.display = 'none';
    scissors.style.display = 'none';
    paper.style.display = 'none';
    

}

function restart() {
    botPoints = 0;
    playerPoints = 0;
    playerScore.textContent = `${playerPoints}`;
    computerScore.textContent = `${botPoints}`;
    finalResult.textContent = "";
    console.log("Restarted");
    finalContainer.removeChild(replayBtn);

    rock.style.display = 'block';
    paper.style.display = 'block';
    scissors.style.display = 'block';
    
}

let playerChoice;
let computerChoice;
let botPoints = 0;
let playerPoints = 0;
let newRound;

//Sounds
const hoverSound = new Audio('./sounds/hover.wav');

//Buttons
const allButtons = document.querySelectorAll("button");
const replayBtn = document.createElement("button");
const buttons = document.querySelectorAll(".playBtn");
const finalResult = document.querySelector(".final");

//Containers
const finalContainer = document.querySelector(".containerForFinal");
const results = document.querySelector(".results");

//Scores
const computerScore = document.querySelector(".computerScore");
const playerScore = document.querySelector(".playerScore");

//Player options
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
replayBtn.textContent = "Restart";
replayBtn.addEventListener('click', (e) => {
    restart();
});
replayBtn.className = "replayBtn";
playerScore.textContent = `${playerPoints}`;
computerScore.textContent = `${botPoints}`;

rock.addEventListener('mouseover', () => hoverSound.play());

paper.addEventListener('mouseover', () => hoverSound.play());

scissors.addEventListener('mouseover', () => hoverSound.play());


rock.addEventListener('click', (e) => {
    playerChoice = "rock";
    playRound(playerChoice);

});

paper.addEventListener('click', (e) => {
    playerChoice = "paper";

        playRound(playerChoice);
    
});

scissors.addEventListener('click', (e) => {
    playerChoice = "scissors";
        playRound(playerChoice);

});






