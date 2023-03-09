// VARIABLES


//For cookie text and cookie itself
let cookieText = document.querySelector(".cookieText");
let automaticText = document.querySelector(".automaticText")
let cookieButtonElm = document.querySelector(".cookie");
cookieButtonElm.addEventListener("click", addCookie);
let cookieContainer = document.querySelector("#cookieContainer");

//Audio variables
audioElm = document.querySelector("audio")

//Cookie count variables
let cookieCount = Number(sessionStorage.getItem("cookieCount"))
let cookieVar = Number(sessionStorage.getItem("cookieVar"));
if (cookieVar==0){
    cookieVar = 1
    sessionStorage.setItem("cookieVar", cookieVar)
}
let automaticVar = Number(sessionStorage.getItem("automaticVar"));
let upgradeCount = Number(sessionStorage.getItem("upgradeCount"));
let perClicksList = [2, 3, 5, 10, 15, 20, 50, 100, 150, 300, 500, 1000, 3000, 10000, 20000, 50000];
let cookiesClicked = Number(sessionStorage.getItem("cookiesClicked"))

//Upgrade variables
let upgradeVar = Number(sessionStorage.getItem("upgradeVar"));
if (upgradeVar == 0){
    upgradeVar = 100;
}
let upgradeButton = document.querySelector(".upgradeButton");
upgradeButton.addEventListener("click", upgrade);
let upgradeContainer = document.querySelector(".upgradeContainer");
let upgradeRequirmentText = document.querySelector(".upgradeRequirmentText");

//Helper menu
let helperMenu = document.querySelector(".helperMenu");
//button to hide helper menu
let hideHelpersButton = document.querySelector(".hideHelperMenu");
hideHelpersButton.addEventListener("click", hideHelperMenu);
//button to gamble
let gambleButton = document.querySelector(".gambleButton");
gambleButton.onclick = function() {
    location.href = "gamble.html";
}
//container with both buttons
let buttonContainer = document.querySelector(".buttonContainer");
//helper required cookies variables
let helperCount = sessionStorage.getItem("helperCount");
if (helperCount == null){
    helperCount = [100, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];
} else{
    helperCount = JSON.parse(helperCount);
}

//helpers expo vars to determine their new prices
let helperExpoVars = sessionStorage.getItem("helperExpoVars");
if (helperExpoVars == null){
    helperExpoVars = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
} else{
    helperExpoVars = JSON.parse(helperExpoVars);
}
let helperIncreaseList = [10, 20, 50, 50, 100, 100, 100, 500, 1000, 1000, 2000, 5000, 5000, 10000, 15000, 15000, 20000, 50000, 100000]

//list of values for each helper to give autimatically
let helperValueList = [.5, 1, 2, 5, 10, 20, 50, 100, 500, 1000]
//Helper parent variables
let helper1 = document.querySelector("#helper1");
let helper2 = document.querySelector("#helper2");
let helper3 = document.querySelector("#helper3");
let helper4 = document.querySelector("#helper4");
let helper5 = document.querySelector("#helper5");
let helper6 = document.querySelector("#helper6");
let helper7 = document.querySelector("#helper7");
let helper8 = document.querySelector("#helper8");
let helper9 = document.querySelector("#helper9");
let helper10 = document.querySelector("#helper10");
let helperList = [helper1, helper2, helper3, helper4, helper5, helper6, helper7, helper8, helper9, helper10];
//helper Button variables
let helperButton1 = document.querySelector("#helperButton1");
helperButton1.textContent = "Price: 10";
let helperButton2 = document.querySelector("#helperButton2");
helperButton2.textContent = "Price: 100";
let helperButton3 = document.querySelector("#helperButton3");
helperButton3.textContent = "Price: 500";
let helperButton4 = document.querySelector("#helperButton4");
helperButton4.textContent = "Price: 1000";
let helperButton5 = document.querySelector("#helperButton5");
helperButton5.textContent = "Price: 5000";
let helperButton6 = document.querySelector("#helperButton6");
helperButton6.textContent = "Price: 10000";
let helperButton7 = document.querySelector("#helperButton7");
helperButton7.textContent = "Price: 50000";
let helperButton8 = document.querySelector("#helperButton8");
helperButton8.textContent = "Price: 100000";
let helperButton9 = document.querySelector("#helperButton9");
helperButton9.textContent = "Price: 500000";
let helperButton10 = document.querySelector("#helperButton10");
helperButton10.textContent = "Price: 1000000";
let helperButtonList = [helperButton1, helperButton2, helperButton3, helperButton4, helperButton5, helperButton6, helperButton7, helperButton8, helperButton9, helperButton10];
//helper image variables
let helperImage1 = document.querySelector("#helperImage1");
let helperImage2 = document.querySelector("#helperImage2");
let helperImage3 = document.querySelector("#helperImage3");
let helperImage4 = document.querySelector("#helperImage4");
let helperImage5 = document.querySelector("#helperImage5");
let helperImage6 = document.querySelector("#helperImage6");
let helperImage7 = document.querySelector("#helperImage7");
let helperImage8 = document.querySelector("#helperImage8");
let helperImage9 = document.querySelector("#helperImage9");
let helperImage10 = document.querySelector("#helperImage10");
let helperImageList = [helperImage1, helperImage2, helperImage3, helperImage4, helperImage5, helperImage6, helperImage7, helperImage8, helperImage9, helperImage10];
//Helper text variables
let helperText1 = document.querySelector("#helperText1");
let helperText2 = document.querySelector("#helperText2");
let helperText3 = document.querySelector("#helperText3");
let helperText4 = document.querySelector("#helperText4");
let helperText5 = document.querySelector("#helperText5");
let helperText6 = document.querySelector("#helperText6");
let helperText7 = document.querySelector("#helperText7");
let helperText8 = document.querySelector("#helperText8");
let helperText9 = document.querySelector("#helperText9");
let helperText10 = document.querySelector("#helperText10");
let helperTextList = [helperText1, helperText2, helperText3, helperText4, helperText5, helperText6, helperText7, helperText8, helperText9, helperText10];

//makes all helper buttons run buyHelper when clicked
helperButtonList[0].addEventListener("click", function() {buyHelper(0)});
helperButtonList[0].disabled = true;
helperButtonList[1].addEventListener("click", function() {buyHelper(1)});
helperButtonList[1].disabled = true;
helperButtonList[2].addEventListener("click", function() {buyHelper(2)});
helperButtonList[2].disabled = true;
helperButtonList[3].addEventListener("click", function() {buyHelper(3)});
helperButtonList[3].disabled = true;
helperButtonList[4].addEventListener("click", function() {buyHelper(4)});
helperButtonList[4].disabled = true;
helperButtonList[5].addEventListener("click", function() {buyHelper(5)});
helperButtonList[5].disabled = true;
helperButtonList[6].addEventListener("click", function() {buyHelper(6)});
helperButtonList[6].disabled = true;
helperButtonList[7].addEventListener("click", function() {buyHelper(7)});
helperButtonList[7].disabled = true;
helperButtonList[8].addEventListener("click", function() {buyHelper(8)});
helperButtonList[8].disabled = true;
helperButtonList[9].addEventListener("click", function() {buyHelper(9)});
helperButtonList[9].disabled = true;


//Variables for the info box
let infoButton = document.querySelector(".infoButton");
infoButton.addEventListener("click", showInfoBox)
let infoText = document.querySelector(".infoText");
infoText.style.display = "none";
let infoDiv = document.querySelector(".infoDivNotShowing");
let cookiesClickedText = document.querySelector(".cookiesClickedText");
let helper1Bought = document.querySelector("#helper1Bought");
let helper2Bought = document.querySelector("#helper2Bought");
let helper3Bought = document.querySelector("#helper3Bought");
let helper4Bought = document.querySelector("#helper4Bought");
let helper5Bought = document.querySelector("#helper5Bought");
let helper6Bought = document.querySelector("#helper6Bought");
let helper7Bought = document.querySelector("#helper7Bought");
let helper8Bought = document.querySelector("#helper8Bought");
let helper9Bought = document.querySelector("#helper9Bought");
let helper10Bought = document.querySelector("#helper10Bought");
let helpersBoughtList = sessionStorage.getItem("helpersBought");
if (helpersBoughtList == null){
    helpersBoughtList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}else{
    helpersBoughtList = JSON.parse(helpersBoughtList);
}
let gambleWinnings = Number(sessionStorage.getItem("gambleWinnings"));
let gambleLosses = Number(sessionStorage.getItem("gambleLosses"));
let gambleWinCount = Number(sessionStorage.getItem("gambleWinCount"));
let gambleLoseCount = Number(sessionStorage.getItem("gambleLoseCount"));
let gambleWinningsText = document.querySelector(".gambleWinnings");
gambleWinningsText.textContent = "Amount won: " + gambleWinnings  + " cookies";
let gambleLossesText = document.querySelector(".gambleLosses");
gambleLossesText.textContent = "Amount lost: " + gambleLosses + " cookies";
let gambleWinCountText = document.querySelector(".gambleWinCount");
gambleWinCountText.textContent = "Gamble Wins: " + gambleWinCount;
let gambleLoseCountText = document.querySelector(".gambleLoseCount");
gambleLoseCountText.textContent = "Gamble Losses: " + gambleLoseCount;



















// FUNCTIONS


//Function to buy a helper
function buyHelper(i){
    cookieCount -= Number(helperCount[i]);
    helperCount[i] += helperIncreaseList[helperExpoVars[i]];
    helperExpoVars[i] += 1
    automaticVar += helperValueList[i];
    helpersBoughtList[i] += 1;
    if (helperExpoVars[i] >= 19){
        helperExpoVars[i] = 0
    }
    sessionStorage.setItem("automaticVar", automaticVar)
    sessionStorage.setItem("helperExpoVars", JSON.stringify(helperExpoVars))
    sessionStorage.setItem("helperCount", JSON.stringify(helperCount))
    sessionStorage.setItem("helpersBought", JSON.stringify(helpersBoughtList))
    updateScreen();
}

//Adds cookies
function addCookie(){
    cookieCount += cookieVar;
    cookiesClicked += 1;
    sessionStorage.setItem("cookiesClicked", cookiesClicked)
    if (audioElm.currentTime >= 10){
        audioElm.currentTime = 0;
    }
    audioElm.play();
    updateScreen();
}

function addAutomaticCookies(){
    cookieCount += automaticVar
    updateScreen()
}

//Upgrades cookies per click
function upgrade(){
    cookieCount -= upgradeVar;
    cookieVar = perClicksList[upgradeCount];
    sessionStorage.setItem("cookieVar", cookieVar);
    upgradeCount += 1;
    sessionStorage.setItem("upgradeCount", upgradeCount);
    upgradeVar *= 10;
    sessionStorage.setItem("upgradeVar", upgradeVar);
    updateScreen();
}

// hides/shows the helper menu
function hideHelperMenu(){
    //Checks if the upgrade button is shown to account for different heights
    if (cookieCount >= upgradeVar){
        if (helperMenu.style.display == "none"){
            infoDiv.style.marginTop = "0px";
            helperMenu.style.display = "block";
            buttonContainer.style.height = "70px";
            hideHelpersButton.textContent = "Hide menu ↓";
        } else{
            infoDiv.style.marginTop = "136px";
            helperMenu.style.display = "none";
            buttonContainer.style.height = "210px";
            hideHelpersButton.textContent = "Show menu ↑";
        }
    } else{
        if (helperMenu.style.display == "none"){
            infoDiv.style.marginTop = "0px";
            helperMenu.style.display = "block";
            buttonContainer.style.height = "70px";
            hideHelpersButton.textContent = "Hide menu ↓";
        } else {
            infoDiv.style.marginTop = "136px";
            helperMenu.style.display = "none";
            buttonContainer.style.height = "210px";
            hideHelpersButton.textContent = "Show menu ↑";
        }
    }
}

function showInfoBox(){
    if (infoText.style.display == "none"){
        //Shows the achievements/info box
        infoText.style.display = "block";
        infoDiv.className = "infoDiv";
        //resets the width of the middle section to stay in the center
        upgradeContainer.style.width = "623px";
        cookieContainer.style.width = "623px";
        cookieText.style.width = "623px";
        automaticText.style.width = "623px";
    } else{
        //Hides the achievements/info box
        infoText.style.display = "none";
        infoDiv.className = "infoDivNotShowing";
        infoButton.style.display ="block";
        //resets the width of the middle section to stay in the center
        upgradeContainer.style.width = "923px";
        cookieContainer.style.width = "923px";
        cookieText.style.width = "923px";
        automaticText.style.width = "923px";
    }
}

function updateScreen(){
    //sets up the text
    sessionStorage.setItem("cookieCount", cookieCount);
    cookieText.textContent = "Current Cookies: " + cookieCount + " (" + cookieVar + " / click)";
    automaticText.textContent = "(" + automaticVar + "/sec)"
    //goes through all the helpers and sees if you have enough cookies for them
    for (i=0; i<10; i++){
        helperButtonList[i].textContent = "Price: " + helperCount[i]
        //If you meet the cookie price for that helper
        if (cookieCount >= helperCount[i]){
            //Makes all of the helper parts clear
            helperList[i].classList.remove("opaque");
            helperList[i].classList.add("clear");
            helperImageList[i].style.opacity = "1";
            helperButtonList[i].disabled = false;
            helperTextList[i].style.opacity = "1";
        } else {
            //Makes all of the helper parts opaque
            helperList[i].classList.remove("clear");
            helperList[i].classList.add("opaque");
            helperImageList[i].style.opacity = ".5";
            helperButtonList[i].disabled = true;
            helperTextList[i].style.opacity = ".5";
        }
    }
    //Checks if you have enough cookies to upgrade and if you do then the upgrade button appears
    if (cookieCount >= upgradeVar & upgradeCount <= 15){
        upgradeButton.textContent = "Upgrade?";
        upgradeButton.style.display = "block";
        upgradeRequirmentText.style.display = "none";
        if (hideHelpersButton.textContent == "Hide menu ↓"){
            buttonContainer.style.height = "70px";
        } else{
            buttonContainer.style.height = "210px";
        }
        
    } else{
        upgradeButton.style.display = "none";
        upgradeRequirmentText.style.display = "block";
        if (upgradeCount <=15){
            upgradeRequirmentText.textContent = "Price for next upgrade: " + upgradeVar + " cookies"
        } else {
            upgradeRequirmentText.textContent = "There are no more upgrades"
        }
        if (infoText.style.display == "block"){
            automaticText.style.width = "623px";
        } else {
            automaticText.style.width = "923px";
        }
        if (hideHelpersButton.textContent == "Show menu ↑"){
            buttonContainer.style.height = "210px";
        } else{
            buttonContainer.style.height = "70px";
        }
    }
    //Updates the info box with your achievements
    cookiesClickedText.textContent = "Cookies Clicked: " + cookiesClicked;
    helper1Bought.textContent = "Grandmas: " + helpersBoughtList[0];
    helper2Bought.textContent = "Bakeries: "+ helpersBoughtList[1];
    helper3Bought.textContent = "Farms: "+ helpersBoughtList[2];
    helper4Bought.textContent = "Factories: "+ helpersBoughtList[3]; 
    helper5Bought.textContent = "Companies: "+ helpersBoughtList[4];
    helper6Bought.textContent = "Kings: "+ helpersBoughtList[5];
    helper7Bought.textContent = "Empires: "+ helpersBoughtList[6];
    helper8Bought.textContent = "Dynasties: "+ helpersBoughtList[7];
    helper9Bought.textContent = "Planets: "+ helpersBoughtList[8];
    helper10Bought.textContent = "Universes: " + helpersBoughtList[9];
    gambleWinnings.textContent
}

//For title
let nameVar = sessionStorage.getItem("nameVar")
if (nameVar == null){
    let Name = prompt("What is your name?", "user");
    if (Name == null){
        Name = "user";
    }
    sessionStorage.setItem("nameVar", Name)
    nameVar = sessionStorage.getItem("nameVar")
}
let titleElm = document.querySelector("h1");
titleElm.textContent = "Welcome " + nameVar +", to Cookie Clicker!";

updateScreen();

setInterval(updateScreen, 1000);
//checks for automatic cookies
setInterval(addAutomaticCookies, 1000);

//for background music
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById("backgroundMusic").play();
    document.removeEventListener('click', musicPlay)
}