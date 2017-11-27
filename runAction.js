function run() {
      yourLuck = tryYourLuck();
                  
    if (yourLuck < 50) {
      haveBeenChased();
      logLuck();
      }
    
    else if (yourLuck > 70) {
      haveSmashed();
      logMonstersLeft()
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