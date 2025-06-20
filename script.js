let gameOver = false;
let playerScore = 0;
let cpuScore = 0;

// Score Counter
const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");

// CPU Emoji's
const cpuRock = document.querySelector("#cRock");
const cpuPaper = document.querySelector("#cPaper");
const cpuScissors = document.querySelector("#cScissors");

// System Message
const sysMsg = document.querySelector("#system-msg");

// Reset Button
const rBtn = document.querySelector("#btn-reset");

function playGame(input) {
    let cpu = parseInt(Math.random() * 3);
    let winMsg = "";

    cpuRock.style.display = "none";
    cpuPaper.style.display = "none";
    cpuScissors.style.display = "none";

    switch(cpu) {
        case 0:
            cpuPaper.style.display = "none";
            cpuRock.style.display = "block";
            break;
        case 1:
            cpuPaper.style.display = "block";
            break;
        case 2:
            cpuScissors.style.display = "block";
            break;
        default:
            // Should not be reached.
    }

    if(input === cpu) {
        winMsg = "Draw";
    }
    else if((input === 0 && cpu === 2) || (input === 2 && cpu === 0)) {
        input < cpu ? playerScore++ : cpuScore++;
        winMsg = input < cpu ? "You win!" : "Computer wins!";
    }
    else if((input === 1 && cpu === 0) || (input === 0 && cpu === 1)) {
        input > cpu ? playerScore++ : cpuScore++;
        winMsg = input > cpu ? "You win!" : "Computer wins!";
    }
    else if((input === 2 && cpu === 1) || (input === 1 && cpu === 2)) {
        input > cpu ? playerScore++ : cpuScore++;
        winMsg = input > cpu ? "You win!" : "Computer wins!";
    }
    else {
        winMsg = "Draw!";
    }

    // Update scores
    pScore.textContent = playerScore;
    cScore.textContent = cpuScore;

    sysMsg.textContent = winMsg;

    if(playerScore === 5 || cpuScore === 5) {
        const test = "Game over! " + (playerScore > cpuScore ? "You " : "CPU ") + "wins!";
        sysMsg.textContent = "Game over! " + (playerScore > cpuScore ? "You win!" : "CPU wins!");
        gameOver = true;
    }
};

const btnR = document.querySelector("button#rock");
btnR.addEventListener("click", () => {
    if(!gameOver) {
        playGame(0);
    }
    else {
        sysMsg.textContent = "You must reset the game to play again!";
    }
});

const btnP = document.querySelector("button#paper");
btnP.addEventListener("click", () => {
    if(!gameOver) {
        playGame(1);
    }
    else {
        sysMsg.textContent = "You must reset the game to play again!";
    }
});

const btnS = document.querySelector("button#scissors");
btnS.addEventListener("click", () => {
    if(!gameOver) {
        playGame(2);
    }
    else {
        sysMsg.textContent = "You must reset the game to play again!";
    }
});

const btnReset = document.querySelector("button#btn-reset");
btnReset.addEventListener("click", () => {
    playerScore = 0;
    cpuScore = 0;
    gameOver = false;

    pScore.textContent = playerScore;
    cScore.textContent = cpuScore;
    sysMsg.textContent = "First to 5 wins!";
})
