const yourHealthMonitor   =   document.getElementById("yourHealthMonitor");
const storyLine           =   document.getElementById("storyLine");
const runBtn              =   document.getElementById("run");
const atackBtn            =   document.getElementById("attack");
const keepGoingBtn        =   document.getElementById("keepGoing"); 
const monstersLeftMonitor =   document.getElementById("monstersLeft");
const yourLuckMonitor     =   document.getElementById("yourLuckMonitor");
const tryAgain            =   document.getElementById("tryAgain");


function setKeepGoing() {
  runBtn.disabled = true;
  atackBtn.disabled = true;
  keepGoingBtn.disabled = false;
}


function setRunOrAttack() {
  atackBtn.disabled = false;
  runBtn.disabled = false;
  keepGoingBtn.disabled = true;
}

function setAttackOnly() {
  runBtn.disabled = true;
  keepGoingBtn.disabled = true;
}

function setAllDisabled() {
  runBtn.disabled = true;
  atackBtn.disabled = true;
  keepGoingBtn.disabled = true;
}