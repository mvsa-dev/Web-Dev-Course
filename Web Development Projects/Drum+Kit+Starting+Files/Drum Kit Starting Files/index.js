let numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playAudio);
}

function playAudio() {
  let buttonInnerHtml = this.innerHTML;
  buttonAnimate(buttonInnerHtml);
  switch (buttonInnerHtml) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(buttonInnerHtml);
      break;
  }
}

document.addEventListener("keydown", keyAudio);

function keyAudio(event) {
  let key = event.key;
  buttonAnimate(event.key);
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      break;
  }
}

function buttonAnimate(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}
