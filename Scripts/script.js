function main()
{
    const startButton = document.querySelector('#startButton');
    const gameButtons = document.querySelectorAll('.gameButton');
    const popUp= document.querySelector('#popUp');
    const displayRoundWinner = document.querySelector('#roundStatus');
    const displayPlayerScore = document.querySelector('#playerScore');
    const displayComputerScore = document.querySelector('#computerScore');
    const displayGameWinner = document.querySelector('#gameResult');
    const WINNING_SCORE=5;
    let playerScore=0,computerScore=0;
    function resetGame()
    {
        startButton.addEventListener('click',()=>
        {
            popUp.style.visibility='hidden';
            playerScore=0,computerScore=0;
            gameButtons.forEach(button => button.disabled=false);
            displayPlayerScore.textContent='Player : 0';
            displayComputerScore.textContent='Computer : 0';
            displayRoundWinner.textContent='Round Winner';
        })
    }

    function checkWinnerRound(playerChoice,computerChoice)
    {
        if (playerChoice==computerChoice)
        {
            return "tie";
        }
        else if (
            (playerChoice=='rock' && computerChoice=='scissor')||
            (playerChoice=='paper' && computerChoice=='rock')||
            (playerChoice=='scissor' && computerChoice=='paper')
        ) {
            return `player`;
        }
        else 
        {
            return `computer`;
        }
    }

    function updateScore(winner) 
    {
        if(winner==='player')
        {
            playerScore++;
        }
        else if (winner==='computer')
        {
            computerScore++;
        }
    }

    function endGame(winner)
    {
        displayGameWinner.textContent=`${winner} wins`;
        popUp.style.visibility='visible';
        gameButtons.forEach(button=>button.disabled=true);
        resetGame();
    }

    function checkEndGame ()
    {
        if (playerScore===WINNING_SCORE)
        {
            endGame("player");
        }
        else if(computerScore===WINNING_SCORE)
        {
            endGame("computer")
        }
    }

    function playRound()
    {
        gameButtons.forEach(button=>
            {
                button.addEventListener('click',event=>
                {
                    let playerChoice=event.target.id;
                    let computerChoice=generateComputerChoice();
                    let winnerRound = checkWinnerRound(playerChoice,computerChoice)
                    if(winnerRound==='player')
                    {
                        displayRoundWinner.textContent=`You win ${playerChoice} beats ${computerChoice}`;
                    }
                    else if(winnerRound==='computer')
                    {
                        displayRoundWinner.textContent=`Computer wins ${computerChoice} beats ${playerChoice}`;
                    }
                    else{
                        displayRoundWinner.textContent=`Tie`;
                    }
                    updateScore(winnerRound);
                    displayComputerScore.textContent=`computer : ${computerScore}`;
                    displayPlayerScore.textContent=`player : ${playerScore}`;
                    checkEndGame();
                })
            })
    }

    gameButtons.forEach(button=>button.disabled=true);
    resetGame();
    playRound();
}

function generateComputerChoice(){
    let choices=["rock","paper","scissor"];
    let randIndex=Math.floor(Math.random()*3);
    return choices[randIndex];
}

main();