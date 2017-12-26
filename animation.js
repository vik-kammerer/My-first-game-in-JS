function say(message) {
  var spd = 200;
  $(storyContent).fadeOut(spd);
  setTimeout(function() {
    storyContent.innerHTML = message;
  }, spd);
  $(storyContent).fadeIn(spd);
 }

 