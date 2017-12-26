function say(message) {
  var spd = 200;
  $(storyContent).fadeOut(spd);
  setTimeout(function() {
    storyContent.innerHTML = message;
  }, spd);
  $(storyContent).fadeIn(spd);
 }

 
 function congratOnWinning() {
    setTimeout(function() {
      $(storyContent).append(winningMessage).fadeIn(200);
    }, 205);
 } 


  function congratOnDeath() {
    setTimeout(function() {
      $(storyContent).append(deathMessage).fadeIn(200);
    }, 205);
 } 


 function updateMonitor(monitorType) {

  
 }