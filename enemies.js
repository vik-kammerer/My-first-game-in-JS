
// //--------------------Stinky hoblin characteristics--------------------
// let   hoblinHealth    = 30;
// let   hoblinAttack    = 10;
// const hoblinName      = "a stinky hoblin";





// //--------------------Fat imp characteristics--------------------
// let   fatImpHealth    = 55;
// let   fatImpAttack    = 20;
// const fatImpName      = "a fat imp";

var currentMonster = {
  health: 0,
  attack: 0,
  name: " somethingIsWrong"
};

var stinkyHoblin = {
  health: 30,
  attack: 10,
  name: "a stinky hoblin"
};


var fatImp = {
  health: 55,
  attack: 20,
  name: "a fat imp" 
};


  function determineCurrentMonster() {
    yourLuck = tryYourLuck() - luckDecrement;
    if (yourLuck >= 50) {
      currentMonster = stinkyHoblin;
    }
    else {
     currentMonster = fatImp; 
    }
  }