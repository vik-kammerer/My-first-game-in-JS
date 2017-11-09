let killedMonst				=		0;
let yourHealth				=		100;


function displayTryAgainBtn() {
	tryAgain.style.display = "block";
	}							
								
function updateKilledCounter() {
	killedCounter.innerHTML = killedMonst;
	}

function updateHealthMonitor() {
	if (yourHealth > 0) {
	yourHealthMonitor.innerHTML = yourHealth;
	}
	else{
	yourHealthMonitor.innerHTML = 0;
	}
}

function checkIfNotAWinner() {
		if (killedMonst >= 10) {	
			storyLine.append(winningMessage);
			runBtn.disabled = true;
			atackBtn.disabled = true;
			keepGoingBtn.disabled = true;
			displayTryAgainBtn();
		}
	}

								
function refresh() {
		storyLine.innerHTML = enemyIsHereMessage;
	}

function checkIfNotDead() {
	if (yourHealth <= 0) {
				storyLine.innerHTML = deathMessage;
        runBtn.disabled = true;
        atackBtn.disabled = true;
        keepGoingBtn.disabled = true;
        displayTryAgainBtn();
	}
}
								
								
								

								
								
