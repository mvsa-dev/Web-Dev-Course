// Initialize variables and arrays
let gamePattern = [];
let userPattern = [];
let levelCount = 0;
let buttonColours = ["red", "blue", "green", "yellow"];
// Game State
const gameState = {
  idle: "IDLE",
  playing: "PLAYING",
  gameEnd: "GAME_END",
};
let currentState = gameState.idle;

// Start Game
if (currentState === gameState.idle) {
  $(document).keydown(gameStart);
}
function gameStart() {
  // Game initialization
  levelCount++;
  $("h1").html("Level " + levelCount);
  setTimeout(nextSequence, 200);
  currentState = gameState.playing;
  enableButtons();
}

// Enables Click function
function enableButtons() {
  if (currentState === gameState.playing) {
    $(".btn").on("click", userClick);
  }
}
// Disables Click function
function disableButtons() {
  $(".btn").off("click", userClick);
}

function userClick(event) {
  let userChosenColour = $(event.target).attr("id");
  userPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  if (gamePattern.length === userPattern.length) {
    //Sequences are compared each time a color is clicked instead of compaering after user has completed clicking
    compareSequence(gamePattern, userPattern);
  }
}

//Game Over
function gameOver() {
  $("h1").html("Game Over, Press Any Key to Restart");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
  playSound("wrong");
  gamePattern = [];
  disableButtons();
  levelCount = 0;
}

// Generate next Sequence
function nextSequence() {
  userPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
  // Game animation
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  $("h1").html("Level " + levelCount);
}

// Compare sequences
function compareSequence(arr1, arr2) {
  // Then, compare each element in the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return gameOver();
    }
  }
  // If we reached here, the arrays are identical
  levelCount++;
  setTimeout(nextSequence, 1000);
}

// User click Animation
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Generate Sound
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
