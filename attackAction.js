function attack() {
    let yourLuck;
    yourLuck = Math.floor(
      Math.random() * 100
      );
                        
    if (yourLuck < 50) {
        yourHealth = yourHealth - 15;
        storyLine.innerHTML = painMessage;
        runBtn.disabled = false;
        atackBtn.disabled = false;
        keepGoingBtn.disabled = true;
        console.log("You luck is " + yourLuck);
        console.log("You health is " + yourHealth);
        updateHealthMonitor()
        checkIfNotDead();
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