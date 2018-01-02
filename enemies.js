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


  function determineCurrentMonster() {
    yourLuck = tryYourLuck() - luckDecrement;
    if (yourLuck >= 50) {
      currentMonster = Object.assign({}, stinkyHoblin);
    }
    else {
      currentMonster = Object.assign({}, fatImp); 
    }
  }