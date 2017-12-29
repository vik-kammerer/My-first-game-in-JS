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

    else if (yourLuck >= 50 && currentMonster.health >= attackSkill) {
      toHitYourFoe();
      say(enemyHurtMessage);

    }
          
    else if (yourLuck >= 50 && currentMonster.health <= attackSkill) {
        haveKilled();
        updateMonstersLeftMonitor();
        logMonstersLeft();
        updateLuckMonitor();
        logLuck();
      }
        checkIfNotAWinner();
        
  }


  function getDamage(enemyAttack) {
    yourHealth = yourHealth - currentMonster.attack;
  }

  function toHitYourFoe() {
    currentMonster.health = currentMonster.health - attackSkill;
  }