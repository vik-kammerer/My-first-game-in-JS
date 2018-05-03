//--------------------StoryLine behavior goes here----------------------------
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

  if (yourLuck >= 60 && checkPriorGameCase("chestDetected") === false) {
    haveFoundChest();
  }

  else if (yourLuck >= 60 && checkPriorGameCase("prisonerDetected") === false) {
    haveFoundPrisoner();
  }

  else {
    determineCurrentMonster();
    enemyIsHereMessage = buildEnemyIsHereMessage();
    say(enemyIsHereMessage);
    setRunOrAttack();

  }

}