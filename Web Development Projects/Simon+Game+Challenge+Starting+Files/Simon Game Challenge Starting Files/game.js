let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
