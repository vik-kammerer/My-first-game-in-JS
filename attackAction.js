function attack() {
      yourLuck = tryYourLuck() - luckDecrement;
                        
    if (yourLuck < 50) {
        haveBeenHurt()
        logLuck();
        logHealth();
        updateHealthMonitor();
        updateLuckMonitor();
        checkIfNotDead();
      }

    else if (yourLuck >= 50 && hoblinHealth >= attackSkill) {
      toHitYourFoe();
      say(enemyHurtMessage);

    }
          
    else if (yourLuck >= 50 && hoblinHealth <= attackSkill) {
        hoblinHealth = 30; //re-write for the next battle
        haveKilled();
        updateMonstersLeftMonitor();
        logMonstersLeft();
        updateLuckMonitor();
        logLuck();
      }
        checkIfNotAWinner();
        
  }


  function getDamage(enemyAttack) {
    yourHealth = yourHealth - enemyAttack;
  }

  function toHitYourFoe() {
    hoblinHealth = hoblinHealth - attackSkill;
  }