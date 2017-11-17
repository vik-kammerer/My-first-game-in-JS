function run() {
      yourLuck = tryYourLuck();
                  
    if (yourLuck < 50) {
      storyLine.innerHTML = noEscapeMessage;
      runBtn.disabled = true;
      keepGoingBtn.disabled = true;
      logLuck();
      }
    
    else if (yourLuck > 70) {
      storyLine.innerHTML = smashingRunnerMessage;
      runBtn.disabled = true;
      atackBtn.disabled = true;
      keepGoingBtn.disabled = false;
      killedMonst = killedMonst + 3;
        console.log(
            `${killedMonst} monster(s) defeated`
            );
      logLuck();
              
      }
    
    else {
      storyLine.innerHTML = hasRunAwayMessage;
      keepGoingBtn.disabled = false;
      atackBtn.disabled = true;
      runBtn.disabled = true;
      logLuck();
      }
                
      checkIfNotAWinner();
      updateKilledCounter();
  }