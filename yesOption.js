function chooseYes() {
  tryYourLuck();
  if (gameCase = "chestDetected" && yourLuck > 60) {
    elixirs++;
    updateElixirsMonitor();
    say(elixirFoundMessage);
    setRunOrAttackMode();
  }
  else {
    say(emptyChestMessage);
    setRunOrAttackMode();
  }
}