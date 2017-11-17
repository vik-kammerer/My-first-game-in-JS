function attack() {
      yourLuck = tryYourLuck();
                        
    if (yourLuck < 50) {
        yourHealth = yourHealth - 15;
        storyLine.innerHTML = painMessage;
        runBtn.disabled = false;
        atackBtn.disabled = false;
        keepGoingBtn.disabled = true;
        logLuck();
        logHealth();
        updateHealthMonitor();
        checkIfNotDead();
      }
      

    
    else {
        storyLine.innerHTML = killedEnemyMessage;
        killedMonst = killedMonst + 1;
        runBtn.disabled = true;
        atackBtn.disabled = true;
        keepGoingBtn.disabled = false;
        logKilledMonsters();
        logLuck();
      }
        checkIfNotAWinner();
        updateKilledCounter();
  }