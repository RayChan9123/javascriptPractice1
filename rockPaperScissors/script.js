let rock = 1;
let paper = 2;
let scissor = 3;

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

computerPlay();

// i need a function that randomly return to rps 
//how? by using Math.floor(Math.random() * 90) + 1) which creates 90 random number

