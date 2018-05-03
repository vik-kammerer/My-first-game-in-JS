let currentMonster = {
  health: 0,
  attack: 0,
  name: " somethingIsWrong"
};

const stinkyHoblin = {
  health: 30,
  attack: 10,
  name: "a stinky hoblin"
};


const fatImp = {
  health: 55,
  attack: 20,
  name: "a fat imp" 
};

const drunkenTroll = {
  health: 85,
  attack: 30,
  name: "a drunken troll"
};


  function determineCurrentMonster() {
    yourLuck = tryYourLuck() - luckDecrement;

    if (yourLuck <= 30) {
      currentMonster = Object.assign({}, drunkenTroll); 
    }

    else if (yourLuck <= 50) {
      currentMonster = Object.assign({}, fatImp); 
    }

    else {
      currentMonster = Object.assign({}, stinkyHoblin);
    }
  }