
//DETECTING BUTTON PRESS
var numButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonINNERHTML = this.innerHTML;
  makeSound(buttonINNERHTML);
  buttonAnimation(buttonINNERHTML);
}

// DETECTING KEYBOARD PRESS
//adding the event listener to the entire document i.e. the whole page listens for keyboard strokes
//when a keydown is detected and passing event in the function just passes the key to the function.
document.addEventListener("keydown",function(evt){
  makeSound(evt.key);
  buttonAnimation(evt.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;
    case "l":
     var audio = new Audio("kick-bass.mp3");
     audio.play();
     break;
     default:console.log(key);
     break;
  }
}
// BUTTON ANIMATION
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
