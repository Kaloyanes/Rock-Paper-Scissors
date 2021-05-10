let abletoplay = Boolean(true);

// all choices
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// all results
const playerresult = document.querySelector("#youres"); 
const airesult = document.querySelector("#aires");
const drawresult = document.querySelector("#drawres");
const bottom = document.querySelector(".bottom")

//aftergame results
const winlosemessage = document.querySelector("#aftergameResult");
const situation = document.querySelector("#situation")

//reset button
const resetbutton = document.querySelector("#resetbutton");

// all possible situations
const win = "You won!🎉";
const lose = "You lose!😢";
const draw = "Draw!";



// results
let playerwins = 0;
let aiwins = 0;
let draws = 0;

let winmove = "";
let losemove = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function game(playerchoice){
    abletoplay = Boolean(false);
    console.log(situation)
    console.log("Game started")

        // a random number for a random choice
    let rnd = getRandomInt(3);
    let AIchoice = ""; 

    //get a random choice
    console.log(rnd);
    switch(rnd){
        case 0:
            AIchoice = "rock";
            break;

        case 1:
            AIchoice = "scissors";
            break;
            
        case 2:
            AIchoice = "paper";
            break;
    }

    console.log(AIchoice)
    console.log(playerchoice)
    // all possible situations and who wins
    if(playerchoice === "" && AIchoice === ""){
        drawadd();
    }

    else if(playerchoice === "rock" && AIchoice === "scissors"){
        wins("player", "Rock", "Scissors");
    }
        
    else if(playerchoice === "rock" && AIchoice === "paper"){
        wins("AI", "Rock", "Paper")
    }
            
    else if(playerchoice === "scissors" && AIchoice === "scissors"){
        drawadd();
    }
            
    else if(playerchoice === "scissors" && AIchoice === "paper"){
        wins("player", "Scissors", "Paper");
    }

    else if(playerchoice === "scissors" && AIchoice === "rock"){
        wins("AI", "Scissors", "Rock");
    }
        
    else if(playerchoice === "paper" && AIchoice === "paper"){
        drawadd();
    }

    else if(playerchoice === "paper" && AIchoice === "rock"){
        wins("player", "Paper", "Rock");
    }
        
    else if(playerchoice === "paper" && AIchoice === "scissors"){
        wins("AI", "Paper", "Scissors");
    }
}

// add a draw
function drawadd(){
    draws++;
    console.log("Draw")
    drawresult.innerText = "Draw: " + draws; 
    winlosemessage.innerText = draw;
    situation.innerText = "";
    bottom.style.display = 'block';
    setTimeout(reset(), 5000);
}

function wins(who, winmove, losemove){
    if(who === "player"){
        playerwins++;
        console.log("Player wins!")
        playerresult.innerText = "You: " + playerwins;
        winlosemessage.innerText = win;
        situation.innerText = winmove + " beats " + losemove;
    }
    
    else{
        aiwins++;
        console.log("AI wins!")
        airesult.innerText = "AI: " + aiwins;
        winlosemessage.innerText = lose;
        situation.innerText = winmove + " beats " + losemove;
    }
    bottom.style.display = 'block';
    console.log("WINNER HAS BEEN DECIDED")
    setTimeout(function() {
        reset();
    }, 30000);
}

function reset(){
    bottom.style.display = 'none';
    abletoplay = Boolean(true);
    playerchoice = "";
    AIchoice = "";
    console.clear();
    console.log("resseted")
    setTimeout(console.log("FFFF"), 2000)
}