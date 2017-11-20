function attack() {
      yourLuck = tryYourLuck();
                        
    if (yourLuck < 50) {
        haveBeenHurt()
        logLuck();
        logHealth();
        updateHealthMonitor();
        updateLuckMonitor()
        checkIfNotDead();
      }
          
    else {
        haveKilled();
        logMonstersLeft();
        logLuck();
      }
        checkIfNotAWinner();
        updateMonstersLeftMonitor();
        updateLuckMonitor()
  }