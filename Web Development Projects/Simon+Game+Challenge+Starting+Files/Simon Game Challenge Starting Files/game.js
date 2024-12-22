//Array gamePattern to store the game pattern
let gamePattern = [];
//Array userPattern to store the user pattern
let userPattern = [];
//function nextSequence to generate next color and add it to the gamePattern array
$(document).keydown(launchGame);
// Functions
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let buttonColours = ["red", "blue", "green", "yellow"];
  let randomChosenColour = buttonColours[randomNumber];
  //add the randomChosenColour to the gamePattern array
  gamePattern.push(randomChosenColour);
  //flash the button with the randomChosenColour
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  //play the sound with the randomChosenColour
  playSound(randomChosenColour);
}

function launchGame() {
  nextSequence();
  userClick();
}

function gameLevel() {
  let level = gamePattern.length + 1;
  $("h1").text("Level " + level);
}

function startText() {
  $("h1").text("Press A Key to Start");
}

function playSound(randomChosenColour) {
  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function userClick() {
  $(".btn").click(userInput);
}

function userInput(event) {
  console.log(event);
}
