//--------------------All UI elements' identifiers go here--------------------
const yourHealthMonitor   =   document.getElementById("yourHealthMonitor");
const storyLine           =   document.getElementById("storyLine");
const runBtn              =   document.getElementById("run");
const atackBtn            =   document.getElementById("attack");
const keepGoingBtn        =   document.getElementById("keepGoing"); 
const monstersLeftMonitor =   document.getElementById("monstersLeft");
const yourLuckMonitor     =   document.getElementById("yourLuckMonitor");
const yourElixirsMonitor  =   document.getElementById("yourElixirsMonitor");
const drinkButton         =   document.getElementById("drinkButton");
const tryAgainBtn         =   document.getElementById("tryAgain");
const yesBtn              =   document.getElementById("yes");
const noBtn               =   document.getElementById("no");
const yesOrNoMode         =   document.getElementById("yesOrNoMode");
const runOrAttackMode     =   document.getElementById("runOrAttackMode");



//--------------------Buttons' accessibility logic goes here------------------
function setRunOrAttackMode() {
  yesOrNoMode.style.display = "none";
  runOrAttackMode.style.display = "block"
}

function setYesOrNoMode() {
  runOrAttackMode.style.display = "none"
  yesOrNoMode.style.display = "block";

}

function setKeepGoing() {
  runBtn.disabled = true;
  atackBtn.disabled = true;
  keepGoingBtn.disabled = false;
}


function setRunOrAttack() {
  atackBtn.disabled = false;
  runBtn.disabled = false;
  keepGoingBtn.disabled = true;
}

function setAttackOnly() {
  runBtn.disabled = true;
  keepGoingBtn.disabled = true;
}

function setAllDisabled() {
  runBtn.disabled = true;
  atackBtn.disabled = true;
  keepGoingBtn.disabled = true;
}

function displayTryAgainBtn() {
  tryAgain.style.display = "block";
}

function hideDrinkButtonIfNone() {
  if (elixirs < 1) {
    drinkButton.style.display = "none";
  }
  else {
    drinkButton.style.display = "block";
  }
} 



//--------------------Counters' behavior goes here----------------------------
function updateLuckMonitor() {
  yourLuckMonitor.innerHTML = yourLuck;
}

function updateHealthMonitor() {
  if (yourHealth >= 20 ) {
  yourHealthMonitor.innerHTML = yourHealth;
  }

  else if (yourHealth < 20 && yourHealth > 0) {
  yourHealthMonitor.innerHTML = yourHealth;
  yourHealthMonitor.style.color = "red";
  }

  else{
  yourHealthMonitor.innerHTML = 0;
  }
}

function updateMonstersLeftMonitor() {
  if (monstersLeft > 0)  {
    monstersLeftMonitor.innerHTML = monstersLeft;
    }
    else
    {
      monstersLeft.innerHTML = "0";
    }
  }

 function updateElixirsMonitor() {
 
    yourElixirsMonitor.innerHTML = elixirs;
    hideDrinkButtonIfNone();
} 

//--------------------StoryLine behavior goes here----------------------------
function say(message) {
  storyLine.innerHTML = message;
}

function moveStory() {
tryYourLuck();
updateLuckMonitor();
  if (yourLuck >= 60) {
    haveFoundChest();
  }
  else {
    say(enemyIsHereMessage);
    setRunOrAttack();

  }

}


