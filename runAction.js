function run() {
      yourLuck = tryYourLuck() - luckDecrement;
                  
    if (yourLuck < 70 && yourLuck > 40) {
      haveBeenChased();
      logLuck();
      }
    
    else if (yourLuck >= 70) {
      haveSmashed();
      logMonstersLeft()
      logLuck();
              
      }

      else if (yourLuck < 30) {
      say(beingCowardMessage);
      luckDecrement = luckDecrement - 10;
      updateLuckDecrementMonitor();
      setKeepGoing();
      logLuck();
              
      }
    
    else {
      haveRunAway();
      logLuck();
      }
                
      checkIfNotAWinner();
      updateMonstersLeftMonitor();
      updateLuckMonitor();
  }