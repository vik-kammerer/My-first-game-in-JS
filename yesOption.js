function chooseYes() {
  tryYourLuck();
  if (gameCase = "chestDetected" && yourLuck > 60) {
    elixirs++;
    updateElixirsMonitor();
    say(elixirFoundMessage);
    setRunOrAttackMode();
    setKeepGoing();
  }
  else {
    say(emptyChestMessage);
    setRunOrAttackMode();
    setKeepGoing();
  }
}