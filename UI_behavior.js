//--------------------All UI elements' identifiers go here--------------------
const yourHealthMonitor     =   document.getElementById("yourHealthMonitor");
const storyLine             =   document.getElementById("storyLine");
const runBtn                =   document.getElementById("run");
const atackBtn              =   document.getElementById("attack");
const keepGoingBtn          =   document.getElementById("keepGoing"); 
const monstersLeftMonitor   =   document.getElementById("monstersLeft");
const yourLuckMonitor       =   document.getElementById("yourLuckMonitor");
const yourElixirsMonitor    =   document.getElementById("yourElixirsMonitor");
const drinkButton           =   document.getElementById("drinkButton");
const tryAgainBtn           =   document.getElementById("tryAgain");
const yesBtn                =   document.getElementById("yes");
const noBtn                 =   document.getElementById("no");
const yesOrNoMode           =   document.getElementById("yesOrNoMode");
const runOrAttackMode       =   document.getElementById("runOrAttackMode");
const luckDecrementMonitor  =   document.getElementById("luckDecrementMonitor");



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

function hideDrinkButtonIfNoNeed() {
  if (elixirs < 1 || yourHealth >= 100) {
    drinkButton.style.visibility = "hidden";
  }
  else {
    drinkButton.style.visibility = "visible";
  }
} 



//--------------------Counters' behavior goes here----------------------------
function updateHealthMonitor() {
  if (yourHealth >= 20 ) {
    $(yourHealthMonitor).hide();
    yourHealthMonitor.innerHTML = yourHealth;
    yourHealthMonitor.style.color = "black";
    $(yourHealthMonitor).fadeIn(animationCycle);
    hideDrinkButtonIfNoNeed();
  }

  else if (yourHealth < 20 && yourHealth > 0) {
    $(yourHealthMonitor).hide();
    yourHealthMonitor.innerHTML = yourHealth;
    yourHealthMonitor.style.color = "#cc0000";
    $(yourHealthMonitor).fadeIn(animationCycle);
    hideDrinkButtonIfNoNeed();
  }

  else if (yourHealth > 100) {
    $(yourHealthMonitor).hide();
    yourHealth = 100;
    $(yourHealthMonitor).fadeIn(animationCycle);
    hideDrinkButtonIfNoNeed();
    //it is needed so that health never exceeds 100 (game rule)
  }

  else{
    $(yourHealthMonitor).hide();
    yourHealthMonitor.innerHTML = 0;
    yourHealthMonitor.style.color = "#cc0000";
    $(yourHealthMonitor).fadeIn(animationCycle);
  }
}

function updateLuckMonitor() {
  $(yourLuckMonitor).hide();
  yourLuckMonitor.innerHTML = yourLuck - luckDecrement;
  $(yourLuckMonitor).fadeIn(animationCycle);
}

function updateLuckDecrementMonitor() {
  if (luckDecrement < 0) {
  luckDecrementMonitor.innerHTML = luckDecrement;
  luckDecrementMonitor.style.visibility = "visible";
  }
  else {
    luckDecrementMonitor.style.visibility = "hidden";
  }
}


function updateMonstersLeftMonitor() {
  if (monstersLeft > 0)  {
    $(monstersLeftMonitor).hide();
    monstersLeftMonitor.innerHTML = monstersLeft;
    $(monstersLeftMonitor).fadeIn(animationCycle);
  }
  else
    {
      $(monstersLeftMonitor).hide();
      monstersLeftMonitor.innerHTML = "0";
      $(monstersLeftMonitor).fadeIn(animationCycle);
    }
  }

 function updateElixirsMonitor() {
 
    $(yourElixirsMonitor).hide();
    yourElixirsMonitor.innerHTML = elixirs;
    $(yourElixirsMonitor).fadeIn(animationCycle);
    hideDrinkButtonIfNoNeed();
} 




