//--------------------StoryLine behavior goes here----------------------------
function say(message) {
  storyContent.innerHTML = message;
}

function refreshStoryEvents() {
  priorGameCase = gameCase;
  gameCase = undefined;
}

function checkPriorGameCase(thisGameCase) {
  if (priorGameCase === thisGameCase) {
    return true;
  }
  else {
    return false;
  }
}

function moveStory() {
yourLuck = tryYourLuck() - luckDecrement;
updateLuckMonitor();
  if (yourLuck >= 60 && checkPriorGameCase("chestDetected") === false) {
    haveFoundChest();
  }

  else if (yourLuck >= 60 && checkPriorGameCase("prisonerDetected") === false) {
    haveFoundPrisoner();
  }

  else {
    say(enemyIsHereMessage);
    setRunOrAttack();

  }

}