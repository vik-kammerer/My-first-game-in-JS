//--------------------Initial parameters go here-------------------------
let monstersLeft			=		15;
let yourHealth				=		100;
let yourLuck          =   undefined;

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


//-------------------------Final conclusions go here----------------------
function checkIfNotAWinner() {
		if (monstersLeft <= 0) {	
			storyLine.append(winningMessage);
			setAllDisabled();
			displayTryAgainBtn();
		}
	}

								
function checkIfNotDead() {
	if (yourHealth <= 0) {
				say(deathMessage);
        setAllDisabled();
        displayTryAgainBtn();
	}
}
								
								
								

								
								
