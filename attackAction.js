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
        logKilledMonsters();
        logLuck();
      }
        checkIfNotAWinner();
        updateKilledCounter();
        updateLuckMonitor()
  }