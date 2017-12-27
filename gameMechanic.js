//--------------------Initial parameters go here-------------------------
let monstersLeft			=		15;
let yourHealth				=		100;
let yourLuck          =   undefined;
let luckDecrement     =   0;
let elixirs           =   0;
let gameCase          =   undefined;
let priorGameCase     =   undefined;

//--------------------Random luck generator goes here--------------------
function getRandom() {
	let rand = Math.floor(
     Math.random() * 100
   );
	return rand;
}

function tryYourLuck() {
	let x = getRandom();
  let z = getRandom();
  let y = getRandom();
  let w = x + z + y;
  return Math.floor(w/3);
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
  yourHealth = yourHealth - 15;
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
								
								
								

								
								
