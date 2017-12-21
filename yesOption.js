chooseYes() {
  tryYourLuck();
  if (gameCase = "chestDetected" && yourLuck > 60) {
    elixir++;
    updateElixirsMonitor();
    say(elixirFoundMessage);
    setRunOrAttackMode();
  }
  else {
    say(emptyChestMessage);
    setRunOrAttackMode();
  }
}