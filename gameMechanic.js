var yourName;
var killedMonst;
yourName = prompt("What is your name, hero?");
killedMonst = 0;

								
								

function keepGoing()
	{
		document.getElementById("atack").disabled = false;
		document.getElementById("run").disabled = false;
		document.getElementById("keepGoing").disabled = true;
		refresh();
		
	}
								
function refresh()
	{
		document.getElementById("storyLine").innerHTML = "You have met your foe. What will you do?"
	}
								
								
								
function battle()
	{
		var yourLuck;
		yourLuck = Math.random();
									
									
		if (yourLuck < 0.1)
			{
				document.getElementById("storyLine").innerHTML = yourName + "... " + "you are dead!"
				document.getElementById("run").disabled = true;
				document.getElementById("atack").disabled = true;
				document.getElementById("keepGoing").disabled = true;
				console.log("You luck is " + yourLuck);
			}
			
		else if (yourLuck > 0.1 && killedMonst == 2)
			{
				document.getElementById("storyLine").innerHTML = yourName + "! " + "You are the winner!"
				document.getElementById("run").disabled = true;
				document.getElementById("atack").disabled = true;
				document.getElementById("keepGoing").disabled = true;
				console.log("You luck is " + yourLuck);
				
			}
		
		else
			{
				document.getElementById("storyLine").innerHTML = yourName + "! " + "You have won!"
				killedMonst = killedMonst + 1;
				console.log("\n" + killedMonst + " monsters are dead now");
				document.getElementById("run").disabled = true;
				document.getElementById("atack").disabled = true;
				document.getElementById("keepGoing").disabled = false;
				console.log("You luck is " + yourLuck);
			}
	}
								
								
function run()
	{
		var yourLuck;
		yourLuck = Math.random();
									
		if (yourLuck < 0.5)
			{
											
			document.getElementById("storyLine").innerHTML = yourName + ", " + "you have been chased and now you have to fight!"
			document.getElementById("run").disabled = true;
											
			}
		else
			{
			document.getElementById("storyLine").innerHTML = yourName + ", " + "you have run away!"
			document.getElementById("keepGoing").disabled = false;
			document.getElementById("atack").disabled = true;
			document.getElementById("run").disabled = true;
			}
								
	}