// setting the function of the main game

function main() {

    // setting the score of the game before we start
    let userScore=0,computerScore=0;
    while(userScore<2 && computerScore<2) {

        // getting the choice of the user and checking for its validity
        let userChoice,testRock,testPaper,testScissor;
        do{
            userChoice=prompt("enter rock,paper or scissor");
            userChoice=userChoice.toLowerCase();
            testRock=userChoice=="rock";
            testPaper=userChoice=="paper";
            testScissor=userChoice=="scissor";
        }while(!(testRock || testPaper || testScissor));
        let computerChoice=generateComputerChoice();

        // setting the logic of the game 
        if(userChoice=="rock"){
            if(computerChoice=="paper"){
                alert(`You: ${userChoice} Computer: ${computerChoice}`);
                alert("Computer Wins");
                computerScore++;
            }
            else if(computerChoice=="scissor"){
                alert(`You: ${userChoice} Computer: ${computerChoice}`);
                alert("You Wins");
                userScore++;
            }
            else{
                alert(`You: ${userChoice} Computer: ${computerChoice}`);
                alert("it's a tie");
            }
        }
        else if (userChoice=="paper") {
            if(computerChoice=="scissor"){
                alert(`You: ${userChoice} Computer: ${computerChoice}`);
                alert("Computer Wins")
                computerScore++;
            }
            else if(computerChoice=="rock"){
                alert(`You: ${userChoice} Computer: ${computerChoice}`);
                alert("You Wins");
                userScore++;
            }
            else{
                alert(`You: ${userChoice} Computer: ${computerChoice}`);
                alert("it's a tie");
            }
            
        }
        else {
            if(computerChoice=="rock"){
                alert(`You: ${userChoice} Computer: ${computerChoice}`);
                alert("Computer Wins");
                computerScore++;
            }
            else if(computerChoice=="paper"){
                alert(`You: ${userChoice} Computer: ${computerChoice}`);
                alert("You Wins");
                userScore++;
            }
            else{
                alert(`You: ${userChoice} Computer: ${computerChoice}`);
                alert("it's a tie");
            }
        }
                
    }

    //declaring the winner of the game 

    if (computerScore>userScore) {
        alert("You Lost");
    }
    else alert("You won");
}


// generate a random choice from the computer

function generateComputerChoice(){
    let choices=["rock","paper","scissor"];
    let randIndex=Math.floor(Math.random()*2);
    return choices[randIndex];
}

// calling the main function of the game

main();