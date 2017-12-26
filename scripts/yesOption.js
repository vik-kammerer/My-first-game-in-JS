function chooseYes() {
  yourLuck = tryYourLuck() - luckDecrement;
  updateLuckMonitor();
  if (gameCase === "chestDetected" && yourLuck >= 60) {
    elixirs++;
    gameCase = undefined;
    updateElixirsMonitor();
    say(elixirFoundMessage);
    setRunOrAttackMode();
    setKeepGoing();
  }

  else if (gameCase === "chestDetected" && yourLuck <= 40) {
    say(explodedChestMessage);
    yourHealth = yourHealth - 40;
    gameCase = undefined;
    updateHealthMonitor();
    setRunOrAttackMode();
    setKeepGoing();
    checkIfNotDead();
  }

  else if (gameCase === "chestDetected" && yourLuck > 40) {
    gameCase = undefined;
    say(emptyChestMessage);
    setRunOrAttackMode();
    setKeepGoing();
  }

  else if (gameCase === "prisonerDetected" && luckDecrement != 0) {
    gameCase = undefined;
    say(beingBlessedMessage);
    luckDecrement = 0;
    updateLuckDecrementMonitor();
    updateLuckMonitor();
    setRunOrAttackMode();
    setKeepGoing();
  }

  else if (gameCase === "prisonerDetected" && luckDecrement === 0) {
    gameCase = undefined;
    say(beingBlessedMessage);
    yourHealth = yourHealth + 15;
    updateHealthMonitor();
    setRunOrAttackMode();
    setKeepGoing();
  }

  else {
    //nothing
  }
  
}