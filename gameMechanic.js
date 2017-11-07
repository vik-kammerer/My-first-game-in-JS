const storyLine				=		document.getElementById("storyLine");
const runBtn					=		document.getElementById("run");
const atackBtn				=		document.getElementById("atack");
const keepGoingBtn		=		document.getElementById("keepGoing");	
const killedCounter 	=		document.getElementById("killedCounter");
const tryAgain 				=		document.getElementById("tryAgain");

let killedMonst				=		0;


function displayTryAgainBtn() {
	tryAgain.style.display = "block";
	}							
								
function updateKilledCounter() {
	killedCounter.innerHTML = killedMonst;
	}

function checkIfNotAWinner() {
		if (killedMonst >= 5) {	
			storyLine.append(" You are the winner!");
			runBtn.disabled = true;
			atackBtn.disabled = true;
			keepGoingBtn.disabled = true;
			displayTryAgainBtn();
		}
	}

								
function keepGoing() {
		atackBtn.disabled = false;
		runBtn.disabled = false;
		keepGoingBtn.disabled = true;
		refresh();
	}
								
function refresh() {
		storyLine.innerHTML = "You have met your foe. What will you do?";
	}
								
								
								
function battle() {
		let yourLuck;
		yourLuck = Math.floor(
  		Math.random() * 100
  		);
												
		if (yourLuck < 50) {
				storyLine.innerHTML = "You are dead!"
				runBtn.disabled = true;
				atackBtn.disabled = true;
				keepGoingBtn.disabled = true;
				displayTryAgainBtn();
				console.log("You luck is " + yourLuck);
			}
			

		
		else {
				storyLine.innerHTML = "The monster has been killed!"
				killedMonst = killedMonst + 1;
				runBtn.disabled = true;
				atackBtn.disabled = true;
				keepGoingBtn.disabled = false;
				console.log("\n" + killedMonst + " monsters are dead now");
				console.log("You luck is " + yourLuck);
			}
				checkIfNotAWinner();
				updateKilledCounter();
	}
								
								
function run() {
		let yourLuck;
		yourLuck = Math.floor(
  		Math.random() * 100
  		);
									
		if (yourLuck < 50) {
			storyLine.innerHTML = "You have been chased and now you have to fight!";
			runBtn.disabled = true;
			keepGoingBtn.disabled = true;	
			}
		
		else if (yourLuck > 0.7) {
			storyLine.innerHTML = "You ran so fast that smashed 3 other monsters!";
			runBtn.disabled = true;
			atackBtn.disabled = true;
			keepGoingBtn.disabled = false;
			killedMonst = killedMonst + 3;
			console.log("\n" + killedMonst + " monsters are dead now");
			console.log("You luck is " + yourLuck);
							
			}
		
		else {
			storyLine.innerHTML = "You have run away!";
			keepGoingBtn.disabled = false;
			atackBtn.disabled = true;
			runBtn.disabled = true;
			}
								
			checkIfNotAWinner();
			updateKilledCounter();
	}