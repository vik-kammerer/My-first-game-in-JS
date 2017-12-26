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
  if (yourLuck >= 60) {
    haveFoundChest();
  }

  else if (yourLuck < 60 && yourLuck > 50) {
    haveFoundPrisoner();
  }

  else {
    gameCase = undefined;
    say(enemyIsHereMessage);
    setRunOrAttack();

  }

}