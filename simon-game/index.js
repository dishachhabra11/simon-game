document.addEventListener("keydown", function () {
  document.querySelector("h1").innerHTML = "Level-1";
});
var classe;
var buttonSelected;
var points = 0;

var level = 1;

var blue = new Audio("sounds/blue.mp3");
var green = new Audio("sounds/green.mp3");
var red = new Audio("sounds/red.mp3");

var yellow = new Audio("sounds/yellow.mp3");
var wrong = new Audio("sounds/wrong.mp3");
var sounds = [green, red, yellow, blue];

function pop() {
  function classSelector() {
    var buttons = ["red", "blue", "green", "yellow"];

    return buttons[Math.floor(Math.random() * buttons.length)];
  }
  classe = classSelector();
  document.querySelector("." + classe).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + classe).classList.remove("pressed");
  }, 100);
  var sou = new Audio("sounds/" + classe + ".mp3");
  sou.play();
}

document.addEventListener("keydown", pop);

for (let i = 0; i < 4; i++) {
  document
    .querySelectorAll(".btn")
    [i].addEventListener("click", function pops() {
      buttonSelected = document.querySelectorAll(".btn")[i].classList[1];
      document.querySelector("." + buttonSelected).classList.add("pressed");
      setTimeout(function () {
        document
          .querySelector("." + buttonSelected)
          .classList.remove("pressed");
      }, 100);

      setTimeout(function () {
        if (classe == buttonSelected) {
          points++;
          if (points == 5) {
            level++;
            document.querySelector("h1").innerHTML = "Level-" + level;
            points = 0;
          }
          pop();
        } else {
          points = 0;
          document.querySelector("h1").innerHTML =
            "game over,press any key to restart";
          wrong.play();
        }
      }, 400);
      sounds[i].play();
    });
}
