function say(message) {
  var spd = 200;
  $(storyContent).hide();
  storyContent.innerHTML = message;
  $(storyContent).fadeIn(spd);
 }

 
 function congratOnWinning() {
    //setTimeout(function() {
      $(storyContent).append(winningMessage).fadeIn(200);
    //}, 210);
 } 


  function congratOnDeath() {
   // setTimeout(function() {
      $(storyContent).append(deathMessage).fadeIn(200);
    //}, 210);
 } 


 function updateMonitor(monitorType) {

  
 }