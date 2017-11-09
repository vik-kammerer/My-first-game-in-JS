function run() {
    let yourLuck;
    yourLuck = Math.floor(
      Math.random() * 100
      );
                  
    if (yourLuck < 50) {
      storyLine.innerHTML = noEscapeMessage;
      runBtn.disabled = true;
      keepGoingBtn.disabled = true;
      console.log("You luck is " + yourLuck); 
      }
    
    else if (yourLuck > 70) {
      storyLine.innerHTML = smashingRunnerMessage;
      runBtn.disabled = true;
      atackBtn.disabled = true;
      keepGoingBtn.disabled = false;
      killedMonst = killedMonst + 3;
      console.log("\n" + killedMonst + " monsters are dead now");
      console.log("You luck is " + yourLuck);
              
      }
    
    else {
      storyLine.innerHTML = hasRunAwayMessage;
      keepGoingBtn.disabled = false;
      atackBtn.disabled = true;
      runBtn.disabled = true;
      console.log("You luck is " + yourLuck);
      }
                
      checkIfNotAWinner();
      updateKilledCounter();
  }