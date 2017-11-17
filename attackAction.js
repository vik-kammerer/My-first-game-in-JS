function attack() {
      yourLuck = tryYourLuck();
                        
    if (yourLuck < 50) {
        haveBeenHurt()
        logLuck();
        logHealth();
        updateHealthMonitor();
        checkIfNotDead();
      }
          
    else {
        haveKilled();
        logKilledMonsters();
        logLuck();
      }
        checkIfNotAWinner();
        updateKilledCounter();
  }