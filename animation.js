const animationCycle = 200;

function say(message) {
  
  $(storyContent).hide();
  storyContent.innerHTML = message;
  $(storyContent).fadeIn(animationCycle);
 }

 
 function congratOnWinning() {
    $(storyContent).append(winningMessage).fadeIn(animationCycle);
 } 


  function congratOnDeath() {
   $(storyContent).append(deathMessage).fadeIn(animationCycle);
 } 


 function updateMonitor(monitorType) {

  
 }