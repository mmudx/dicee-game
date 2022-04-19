function randomDice(){
  var dice = Math.floor(Math.random()*6)+1;
  return dice;
}
var dice1 = randomDice();
var diceImageSrc1 = "images/dice" + dice1 + ".png";
var dice2 = randomDice();
var diceImageSrc2 = "images/dice" + dice2 + ".png";

document.querySelector(".img1").setAttribute("src", diceImageSrc1);
document.querySelector(".img2").setAttribute("src", diceImageSrc2);



if (dice1>dice2) {
  document.querySelector("h1").textContent = "🚩 PLAYER 1 WINS";
}
else if (dice1<dice2) {
  document.querySelector("h1").textContent = "PLAYER 2 WINS 🚩";
}
else document.querySelector("h1").textContent = "DRAW";
