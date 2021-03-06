function chooseYes() {
  yourLuck = tryYourLuck() - luckDecrement;
  updateLuckMonitor();
  if (gameCase === "chestDetected" && yourLuck >= 60) {
    elixirs++;
    updateElixirsMonitor();
    say(elixirFoundMessage);
    setRunOrAttackMode();
    setKeepGoing();
    refreshStoryEvents();
  }

  else if (gameCase === "chestDetected" && yourLuck <= 40) {
    say(explodedChestMessage);
    yourHealth = yourHealth - 40;
    updateHealthMonitor();
    setRunOrAttackMode();
    setKeepGoing();
    checkIfNotDead();
    refreshStoryEvents();
  }

  else if (gameCase === "chestDetected" && yourLuck > 40) {
    say(emptyChestMessage);
    setRunOrAttackMode();
    setKeepGoing();
    refreshStoryEvents();
  }

  else if (gameCase === "prisonerDetected" && luckDecrement != 0 && yourLuck >= 40) {
    luckDecrement = 0;
    say(beingBlessedMessage);
    setKeepGoing();
    setRunOrAttackMode();
    refreshStoryEvents();
    updateLuckDecrementMonitor();
    updateLuckMonitor();
  }

  else if (gameCase === "prisonerDetected" && yourLuck < 30) {
    monstersLeft = monstersLeft + 3;
    say(warlockCallMessage);
    updateMonstersLeftMonitor();
    setKeepGoing();
    setRunOrAttackMode();
    refreshStoryEvents();
    updateLuckDecrementMonitor();
    updateLuckMonitor();
  }

  else if (gameCase === "prisonerDetected" && yourHealth < 100) {
    say(healerSavedMessage);
    yourHealth = yourHealth + 15;
    updateHealthMonitor();
    setRunOrAttackMode();
    setKeepGoing();
    refreshStoryEvents();
  }

  else if (gameCase === "prisonerDetected" && yourHealth === 100) {
    say(dyingPrisonerMessage);
    setKeepGoing();
    setRunOrAttackMode();
    refreshStoryEvents();
  }

  else {
    //nothing
  }
  
}