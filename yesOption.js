function chooseYes() {
  yourLuck = tryYourLuck();
  updateLuckMonitor();
  if (gameCase = "chestDetected" && yourLuck >= 60) {
    elixirs++;
    updateElixirsMonitor();
    say(elixirFoundMessage);
    setRunOrAttackMode();
    setKeepGoing();
  }

  else if (gameCase = "chestDetected" && yourLuck < 60) {
    say(explodedChestMessage);
    yourHealth = yourHealth - 40;
    updateHealthMonitor();
    setRunOrAttackMode();
    setKeepGoing();
    checkIfNotDead();
  }

  else {
    say(emptyChestMessage);
    setRunOrAttackMode();
    setKeepGoing();
  }
}