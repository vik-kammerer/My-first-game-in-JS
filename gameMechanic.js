//--------------------Initial parameters go here-------------------------
let monstersLeft			=		15;
let yourHealth				=		100;
let yourLuck          =   undefined;
let luckDecrement     =   0;
let elixirs           =   0;
let gameCase          =   undefined;
let priorGameCase     =   undefined;
let attackSkill       =   25;

//--------------------Random luck generator goes here--------------------

function getRandomIntInclusive(min, max) {

    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    let randomNumber = randomBuffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}

function tryYourLuck() {
  return getRandomIntInclusive(1, 100)
}


//-------------------------Game cases go here-----------------------------
function haveFoundChest() {
  setYesOrNoMode();
  say(chestDetectedMessage);
  gameCase = "chestDetected";
}

function haveFoundPrisoner() {
  setYesOrNoMode();
  say(prisonerDetectedMessage);
  gameCase = "prisonerDetected";
}

function haveBeenHurt() {
	say(painMessage);
  getDamage(currentMonster.attack);
	setRunOrAttack();
}

function haveKilled() {
	say(killedEnemyMessage);
  monstersLeft = monstersLeft - 1;
  setKeepGoing();
}

function haveBeenChased() {
	say(noEscapeMessage);
  setAttackOnly();
}

function haveSmashed() {
	say(smashingRunnerMessage);
  setKeepGoing();
  monstersLeft = monstersLeft - 3;
}

function haveRunAway() {
	say(hasRunAwayMessage);
  setKeepGoing();
}

function haveBecomeCoward() {
  say(beingCowardMessage);
  setKeepGoing();
}

function drinkElixir() {
  if (elixirs != 0) {
  yourHealth = yourHealth + 15;
  elixirs = elixirs - 1;
  updateHealthMonitor();
  updateElixirsMonitor();
  }
}


//-------------------------Final conclusions go here----------------------
function checkIfNotAWinner() {
		if (monstersLeft <= 0) {	
			//storyContent.append(winningMessage);
			setAllDisabled();
			displayTryAgainBtn();
      congratOnWinning();
      
		}
	}

								
function checkIfNotDead() {
	if (yourHealth <= 0) {
				
        setAllDisabled();
        displayTryAgainBtn();
        congratOnDeath(); 

        

	}
}
								
								
								

								
								
