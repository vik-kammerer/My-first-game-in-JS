let   enemyIsHereMessage        =   buildEnemyIsHereMessage();


const painMessage               =   "You have been hurt!";
const winningMessage            =   " You are the winner!";
const deathMessage              =   " It is over...";
const noEscapeMessage           =   "You have been chased and now you have to fight!";
const smashingRunnerMessage     =   "You ran so fast that smashed 3 other monsters!";
const hasRunAwayMessage         =   "You have run away!";
const killedEnemyMessage        =   "The monster has been killed!";
const chestDetectedMessage      =   "You have found an old dark chest. Will you open it?";
const elixirFoundMessage        =   "There is an elixir inside!";
const emptyChestMessage         =   "There is nothing inside...";
const explodedChestMessage      =   "BOOM!!! The chest has exploded...";
const beingCowardMessage        =   "The danger left behind, but Gods hate cowards!";
const prisonerDetectedMessage   =   "You see a prisoner, chained to the wall. He desparatly begs to free him. Will you do it?";
const beingBlessedMessage       =   "The man turns out to be a priest and he gratefully blesses you. Now all curses have gone.";
const warlockCallMessage        =   "The man turns out to be a warlock. He calls to dark forces and fades out laughing as a mad. Now more creatures are coming here...";
const healerSavedMessage        =   "The man turns out to be a healer. He gratefully cures your wounds."
const enemyHurtMessage          =   "You've hurt this bastard! Keep fighting!"




function buildEnemyIsHereMessage() {
  return "You have met " + currentMonster.name + ". What will you do?"
}