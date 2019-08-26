var minRange = document.querySelector("#min-range");
var maxRange = document.querySelector("#max-range");
var button = document.querySelector('#update-btn');
var minSpan = document.getElementById('min-span');
var maxSpan = document.getElementById('max-span');
var grabName1 = document.getElementById('player1name')
var grabName2 = document.getElementById('player2name')
var grabGuess1 = document.getElementById('player1guess')
var grabGuess2 = document.getElementById('player2guess')
var grabNameSpan1 = document.getElementById('challenger-1-name')
var grabNameSpan2 = document.getElementById('challenger-2-name')
var grabGuessP1 = document.getElementById('guess1card')
var grabGuessP2 = document.getElementById('guess2card')
var plyr1vs = document.getElementById('chall1name');
var plyr2vs = document.getElementById('chall2name');
var winnername = document.getElementById('winnernamecard');
var guesshint1 = document.getElementById('howclose1');
var guesshint2 = document.getElementById('howclose2');
var guessbtn = document.getElementById('submit-guess')
var resetbtn = document.getElementById('reset-game')
var clearbtn = document.getElementById('clear-game')
var vs1 = document.getElementById('chall1name');
var vs2 = document.getElementById('chall2name');
var winnername = document.getElementById('winnernamecard');
var card1name = grabName1.value;
var card2name = grabName2.value;
var card1guess = grabGuess1.value;
var card2guess = grabGuess2.value;

// Displays range and grabs random integer
button.addEventListener('click', function() {
  event.preventDefault();
  displayRange();
  getRandomInt();
});

// grabs players info and puts them in the space below designated as card, also shows how close they are
guessbtn.addEventListener('click', function() {
  changeName();
  changeGuess();
  determineWinner();
  guessHint();
  konamiCode();
});

// grabs all forms and reverts back to original state
resetbtn.addEventListener('click', function() {
  document.getElementById('challenge1').reset();
  document.getElementById('challenge2').reset();
  guesshint1.innerHTML = "";
  guesshint2.innerHTML = "";
  grabNameSpan1.innerHTML = "Challenger 1";
  grabNameSpan2.innerHTML = "Challenger 2";
  grabGuessP1.innerHTML = '?';
  grabGuessP2.innerHTML = '?';
  getRandomInt();
  resetGame();
  resetbtn.disabled = true;
  clearbtn.disabled = true;
});

// Clears players guesses
clearbtn.addEventListener('click', function() {
  grabGuess1.value = '';
  grabGuess2.value = '';
  clearbtn.disabled = true
});

// changes strings to integers
function changeToInt(inputField) {
  return parseInt(inputField.value);
}

// Displays range in second section
function displayRange() {
  minSpan.innerText = minRange.value;
  maxSpan.innerText = maxRange.value;
};

// generate random number
function getRandomInt() {
  randomInt = Math.floor(Math.random() * (changeToInt(maxRange) -
    changeToInt(minRange) + 1)) + changeToInt(minRange);
  console.log(randomInt);
};
// Display Name in Score Section
function changeName() {
  var card1name = grabName1.value;
  var card2name = grabName2.value;
  grabNameSpan1.innerHTML = card1name;
  grabNameSpan2.innerHTML = card2name;
}
// Display Guess in score section
function changeGuess() {
  var card1guess = grabGuess1.value;
  var card2guess = grabGuess2.value;
  grabGuessP1.innerHTML = card1guess
  grabGuessP2.innerHTML = card2guess
}

// Reset Forms
function resetGame() {
  document.getElementById('challenge1').reset();
  document.getElementById('challenge2').reset();
  document.getElementById('rangeform').reset();
  minSpan.innerText = "";
  maxSpan.innerText = "";
}

// provides hint according to players guess
function guessHint() {
  var card1guess = grabGuess1.value;
  var card2guess = grabGuess2.value;

  if (card1guess > randomInt) {
    guesshint1.innerHTML = "That's too high";
  } else guesshint1.innerHTML = "That's too low";

  if (card2guess > randomInt) {
    guesshint2.innerHTML = "That's too high";
  } else guesshint2.innerHTML = "That's too low";

  if (card1guess == card2guess && card1guess == randomInt) {
    guesshint2.innerHTML = "TIE!";
    guesshint1.innerHTML = "TIE!";
  } else if (card2guess == randomInt) {
    guesshint2.innerHTML = "BOOM!";
    guesshint1.innerHTML = "Loser!";
  } else if (card1guess == randomInt) {
    guesshint1.innerHTML = "BOOM!";
    guesshint2.innerHTML = "Loser!";
  } else return
}
// 
function determineWinner() {
  var card1guess = grabGuess1.value;
  var card2guess = grabGuess2.value;

  if (card1guess == card2guess && card1guess == randomInt) {
    alert("It's a TIE! Reset the game to play again");
    return
  } else if (card1guess == randomInt && card2guess != randomInt) {
    winnername.innerHTML = grabName1.value
    vs1.innerHTML = grabName1.value
    vs2.innerHTML = grabName2.value
  } else if (card2guess == randomInt && card1guess != randomInt) {
    winnername.innerHTML = grabName2.value
    vs1.innerHTML = grabName1.value
    vs2.innerHTML = grabName2.value
  } else return
}

function konamiCode() {
  var card1guess = grabGuess1.value;
  var card2guess = grabGuess2.value;
  if (card1guess == card2guess && card1guess == 42) {
    alert("Don't Panic :) ")
  } else return
}
// Buttons should be disabled if there is not input

function stoppedTyping() {
  var clearGame = document.querySelector('#clear-game')
  if ((grabGuess1.value.length > 0 || grabGuess2.value.length > 0)) {
    clearGame.disabled = false;
  } else {
    clearGame.disabled = true;
  }
}

function resetButtonFunction() {
  var ele = document.getElementsByClassName('reset-function');
  for (i = 0; i < ele.length; i++) {

  }
  // if(
  if (
    grabName1.length == 0 && grabName2.length == 0 &&
    grabGuess1.value == 0 && grabGuess2.value == 0) {
    resetbtn.disabled = true;
  } else
    resetbtn.disabled = false;
}
