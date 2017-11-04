var killedMonst;
var storyLine;
var runBtn;
var atackBtn;
var keepGoingBtn;

storyLine		=	document.getElementById("storyLine");
runBtn			=	document.getElementById("run");
atackBtn		=	document.getElementById("atack");
keepGoingBtn	=	document.getElementById("keepGoing");	
killedMonst		=	0;

								
								
function checkIfNotAWinner()
	{
		if (killedMonst >= 5)
		{
			storyLine.innerHTML = "You are the winner!"
			runBtn.disabled = true;
			atackBtn.disabled = true;
			keepGoingBtn.disabled = true;
		}
	}

								
function keepGoing()
	{
		atackBtn.disabled = false;
		runBtn.disabled = false;
		keepGoingBtn.disabled = true;
		refresh();
		
	}
								
function refresh()
	{
		storyLine.innerHTML = "You have met your foe. What will you do?"
	}
								
								
								
function battle()
	{
		var yourLuck;
		yourLuck = Math.random();
									
									
		if (yourLuck < 0.35)
			{
				storyLine.innerHTML = "You are dead!"
				runBtn.disabled = true;
				atackBtn.disabled = true;
				keepGoingBtn.disabled = true;

				console.log("You luck is " + yourLuck);
			}
			

		
		else
			{
				storyLine.innerHTML = "The monster has been killed!"
				killedMonst = killedMonst + 1;
				runBtn.disabled = true;
				atackBtn.disabled = true;
				keepGoingBtn.disabled = false;

				console.log("\n" + killedMonst + " monsters are dead now");
				console.log("You luck is " + yourLuck);
			}
				checkIfNotAWinner();
	}
								
								
function run()
	{
		var yourLuck;
		yourLuck = Math.random();
									
		if (yourLuck < 0.5)
			{
											
			storyLine.innerHTML = "You have been chased and now you have to fight!"
			runBtn.disabled = true;
											
			}
		
		else if (yourLuck > 0.7)
			{

			storyLine.innerHTML = "You ran so fast that smashed 3 other monsters!"
			runBtn.disabled = true;
			atackBtn.disabled = true;
			keepGoingBtn.disabled = false;
			killedMonst = killedMonst + 3;

			console.log("\n" + killedMonst + " monsters are dead now");
			console.log("You luck is " + yourLuck);
							
			}
		
		else
			{
			storyLine.innerHTML = "You have run away!"
			keepGoingBtn.disabled = false;
			atackBtn.disabled = true;
			runBtn.disabled = true;
			}
								
			checkIfNotAWinner();
	}