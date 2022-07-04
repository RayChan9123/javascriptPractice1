let rock = "rock";
let paper = "paper";
let scissor = "scissor";

function computerPlay() {
    let random = Math.floor(Math.random() * 90 + 1);
    //console.log(random);
    if (random <= 30)
    {   //console.log(rock);
        return rock;
    } else if ( random > 30 && random <= 60)
    {//console.log(paper);
        return paper;
    } else 
    {//console.log(scissor);
        return scissor;
    }
}



// i need a function that randomly return to rps 
//how? by using Math.floor(Math.random() * 90) + 1) which creates 90 random number

let playerSelection = "rock";
let computerSelection = computerPlay();
let lose1 = "You lose! Paper beats Rock!";
let lose2 = "You lose! Scissor beats Paper!";
let lose3 = "You lose! Rock beats Scissor!";

let win1 = "You win! Paper beats Rock!";
let win2 = "You win! Scissor beats Paper!";
let win3 = "You win! Rock beats Scissor!";

let draw = " That's a draw";

function oneRound ( playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection == "rock" && computerSelection == "paper")
    {
        return lose1;
    }
    else if (playerSelection == "paper" && computerSelection == "scissor" )
    {
        return lose2;
    }
    else if (playerSelection == "scissor" && computerSelection == "rock" )
    {
        return lose3;
    }
    else if (playerSelection == "paper" && computerSelection == "rock" )
    {
        return win1;
    }
    else if (playerSelection == "scissor" && computerSelection == "paper" )
    {
        return win2;
    }
    else if (playerSelection == "rock" && computerSelection == "scissor" )
    {
        return win3;
    }
    else 
    {
        return draw;
    }
}
//console.log(oneRound(playerSelection, computerSelection));
// function pass in two parameters
// case insensitive
// return a string that declares the winner

function game() {

    let cp = 0;
    let user = 0;
    let cpWin = "The computer won you haha!";
    let userWin = "You won the computer haha!";
    for ( let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Rock or Paper or scissor ?", "");
        console.log(oneRound(playerSelection, computerSelection));
        (oneRound(playerSelection, computerSelection) == lose1 || lose2 || lose3) ? cp++ : user++;
    }

    let result = (cp > user) ?  cpWin : userWin;
    return result;
}
console.log(game());
// a function call oneRound() 5 times
// get user input via prompt, in the loop
// the function keeps score
//report winner or loser at the end