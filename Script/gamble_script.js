//cookieCount
let cookieCount = Number(sessionStorage.getItem("cookieCount"));

//Title
let Name = sessionStorage.getItem("nameVar");
let title = document.querySelector("h1");
title.textContent = "Go waste your cookies, " + Name + "!!! MWAH HAH HAAAH!!!";

//Gamble input
let gambleInput = document.querySelector(".gambleInput");
gambleInput.defaultValue = 0;
gambleInput.value = Number(gambleInput.textContent);
//Buttons in the gamlbe input
upButton = document.querySelector(".upButton");
upButton.addEventListener("click", addGamble);
downButton = document.querySelector(".downButton");
downButton.addEventListener("click", subtractGamble);
//To make the buttons appear when hovering over the input box
function checkForHover(){
    if (document.querySelector(".gambleInput:hover") != null){
        upButton.style.display = "inline-block";
        downButton.style.display = "inline-block";
    } else{
        if (document.querySelector(".upButton:hover") == null & document.querySelector(".downButton:hover") == null){
            upButton.style.display = "none";
            downButton.style.display = "none";
        }
    }
}
setInterval(checkForHover, 100);
//Gamble button
let gambleButton = document.querySelector(".gambleButton");
gambleButton.textContent = "Gamble";
gambleButton.addEventListener("click", gamble);
//Gamble Number Text
let numberDiv1 = document.querySelector("#numberDiv1");
let numberDiv2 = document.querySelector("#numberDiv2");
let numberDiv3 = document.querySelector("#numberDiv3");
//currentCookieCount
let cookieText = document.querySelector(".currentCookieCount");
cookieText.textContent = "Current Cookies: " + cookieCount;
//Jackpot text
let jackpotText = document.querySelector(".jackpotText");
jackpotText.style.display = "none";
//winLoseText
let winLoseText = document.querySelector(".greenWinLoseText");
winLoseText.style.display = "none";
//Sounds for gambling and jackpot
let jackpotSound = document.querySelector("#jackpotSound");
jackpotSound.volume = .5;
let gambleSound = document.querySelector("#gambleSound");
gambleSound.volume = .4;
//Background music
let backgroundMusic = document.getElementById("backgroundMusic");
//Winnings and losses
let gambleWinnnings = Number(sessionStorage.getItem("gambleWinnings"));
let gambleLosses = Number(sessionStorage.getItem("gambleLosses"));
let gambleWinCount = Number(sessionStorage.getItem("gambleWinCount"));
let gambleLoseCount = Number(sessionStorage.getItem("gambleLoseCount"));

//Lets you gamble and updates the cookie count
function gamble(){
    jackpotSound.pause()
    gambleSound.currentTime = 0;
    jackpotSound.currentTime = 0;
    numberDiv1.textContent = "";
    numberDiv2.textContent = "";
    numberDiv3.textContent = "";
    jackpotText.style.display = "none";
    winLoseText.style.display = "none";
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let num3= Math.floor(Math.random() * 10);
    console.log(Number(gambleInput.value))
    if (gambleInput.value > cookieCount){
        winLoseText.textContent = "Error, too many cookies, try again.";
        winLoseText.style.display = "block";
        winLoseText.className = "redWinLoseText";
    } else if(gambleInput.value < 0){
        winLoseText.textContent = "Error, negative cookies, try again.";
        winLoseText.style.display = "block";
        winLoseText.className = "redWinLoseText";
    } else if(Number.isNaN(Number(gambleInput.value))){
        winLoseText.textContent = "Error, not a number, try again.";
        winLoseText.style.display = "block";
        winLoseText.className = "redWinLoseText";
    } else if(!Number.isInteger(Number(gambleInput.value))){
        winLoseText.textContent = "Error, not an integer, try again.";
        winLoseText.style.display = "block";
        winLoseText.className = "redWinLoseText";
    } else {
        gambleButton.disabled = true;
        gambleSound.play();
        setTimeout(() => {numberDiv1.textContent = num1;}, 500);
        setTimeout(() => {numberDiv2.textContent = num2;}, 1500);
        gambleSound.currentTime = 0;
        gambleSound.play();
        setTimeout(function() {result(num1, num2, num3)}, 3000);
    }
}

function result(num1, num2, num3){
    numberDiv3.textContent = num3;
    if (num1 == 7 && num2 == 7 && num3==7){
        gambleWinCount += 1;
        cookieCount += (gambleInput.value *100);
        gambleWinnnings += (gambleInput.value *100);
        jackpotText.textContent = "JACKPOT!!!";
        jackpotText.style.display = "block";
        winLoseText.textContent = "You get back 100x the cookies!!!";
        winLoseText.style.display = "block";
        winLoseText.className = "greenWinLoseText";
        jackpotSound.play();
    } else if (num1 == num2 && num2 == num3){
        gambleWinCount += 1;
        cookieCount += (gambleInput.value * 5);
        gambleWinnings += (gambleInput.value * 5);
        winLoseText.textContent = "You get back 5x the cookies!!";
        winLoseText.style.display = "block";
        winLoseText.className = "greenWinLoseText";
    } else if (num1 == num2 || num2 == num3 || num3 == num1){
        gambleWinCount += 1;
        cookieCount += (gambleInput.value * 2);
        gambleWinnnings += (gambleInput.value * 2);
        winLoseText.textContent = "You get back 2x the cookies!";
        winLoseText.style.display = "block";
        winLoseText.className = "greenWinLoseText";
    } else{
        gambleLoseCount += 1
        cookieCount -= gambleInput.value;
        gambleLosses += gambleInput.value;
        winLoseText.className = "redWinLoseText";
        winLoseText.style.display = "block";
        winLoseText.textContent = "You lose!"
    }
    sessionStorage.setItem("cookieCount", cookieCount);
    sessionStorage.setItem("gambleWinnings", gambleWinnnings);
    sessionStorage.setItem("gambleLosses", gambleLosses);
    sessionStorage.setItem("gambleWinCount", gambleWinCount);
    sessionStorage.setItem("gambleLoseCount", gambleLoseCount);
    cookieText.textContent = "Current Cookies: " + cookieCount;
    gambleButton.disabled = false;
}

//to explain how to gamble
let infoVar = 0;
infoVar = Number(sessionStorage.getItem("infoVar", infoVar));
if (infoVar==0){
    //alert to explain the game
    info = alert("This is how gambling works:\n\nEnter in the input box the amount of cookies you want to gamble. Three numbers will appear in the big boxes.If none of the numbers are the same, you lose the cookies you put in. If 2 of the numbers are the same, you get back 2 times the cookies you put in. Likewise, if all three numbers are the same, then you get back 5 times the cookies you put in. Finally, if you get three 7's you get the jackpot, 100 times the cookies you put in!\n\nHave fun and Good Luck!");
    infoVar = 1;
    sessionStorage.setItem("infoVar", infoVar);
}

let infoButton = document.querySelector(".infoButton");
infoButton.addEventListener("click", alerted);
function alerted(){
    //alert to explain the game
    info = alert("This is how gambling works:\n\nEnter in the input box the amount of cookies you want to gamble. Three numbers will appear in the big boxes.If none of the numbers are the same, you lose the cookies you put in. If 2 of the numbers are the same, you get back 2 times the cookies you put in. Likewise, if all three numbers are the same, then you get back 5 times the cookies you put in. Finally, if you get three 7's you get the jackpot, 100 times the cookies you put in!\n\nHave fun and Good Luck!");
}

//for background music
document.addEventListener('click', musicPlay);
function musicPlay() {
    backgroundMusic.volume = .2;
    backgroundMusic.play();
    document.removeEventListener('click', musicPlay);
}

function addGamble(){
    gambleInput.value = Number(gambleInput.value) + 1
}

function subtractGamble(){
    if (Number(gambleInput.value) >= 1){
        gambleInput.value = Number(gambleInput.value) - 1
    }
}