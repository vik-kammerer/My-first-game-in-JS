let monstersLeft			=		15;
let yourHealth				=		100;
let yourLuck;


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

function say(message) {
  storyLine.innerHTML = message;
}

function haveBeenHurt() {
	say(painMessage);
  yourHealth = yourHealth - 15;
	setRunOrAttack()
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

function displayTryAgainBtn() {
	tryAgain.style.display = "block";
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

function updateLuckMonitor() {
	yourLuckMonitor.innerHTML = yourLuck;
}

function checkIfNotAWinner() {
		if (monstersLeft <= 0) {	
			storyLine.append(winningMessage);
			setAllDisabled();
			displayTryAgainBtn();
		}
	}

								
function refresh() {
	say(enemyIsHereMessage);
}

function checkIfNotDead() {
	if (yourHealth <= 0) {
				say(deathMessage);
        setAllDisabled();
        displayTryAgainBtn();
	}
}
								
								
								

								
								
