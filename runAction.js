function run() {
      yourLuck = tryYourLuck();
                  
    if (yourLuck < 50) {
      haveBeenChased()
      logLuck();
      }
    
    else if (yourLuck > 70) {
      haveSmashed();
      logKilledMonsters()
      logLuck();
              
      }
    
    else {
      haveRunAway();
      logLuck();
      }
                
      checkIfNotAWinner();
      updateKilledCounter();
      updateLuckMonitor()
  }