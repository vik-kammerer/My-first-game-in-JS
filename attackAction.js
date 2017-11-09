function attack() {
    let yourLuck;
    yourLuck = Math.floor(
      Math.random() * 100
      );
                        
    if (yourLuck < 50) {
        storyLine.innerHTML = deathMessage;
        runBtn.disabled = true;
        atackBtn.disabled = true;
        keepGoingBtn.disabled = true;
        displayTryAgainBtn();
        console.log("You luck is " + yourLuck);
      }
      

    
    else {
        storyLine.innerHTML = killedEnemyMessage;
        killedMonst = killedMonst + 1;
        runBtn.disabled = true;
        atackBtn.disabled = true;
        keepGoingBtn.disabled = false;
        console.log("\n" + killedMonst + " monsters are dead now");
        console.log("You luck is " + yourLuck);
      }
        checkIfNotAWinner();
        updateKilledCounter();
  }