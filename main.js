var minRange = document.querySelector("#min-range");
var maxRange = document.querySelector("#max-range");
var button = document.querySelector('#update-btn');
var minSpan = document.getElementById('min-span');
var maxSpan = document.getElementById('max-span');

function changeStringToInt(inputField){
  return parsed = parseInt(inputField.value);
}

//
// var inputmin = document.getElementById('min-range');
// var inputmax = document.getElementById('max-range');

function displayRange() {
	var spanmin = minRange.value;
	var spanmax = maxRange.value;
  minSpan.innerText = spanmin;
  maxSpan.innerText= spanmax;
  event.preventDefault();
 };

function getRandomInt() {
	event.preventDefault();
	let randomInt = Math.floor(Math.random() 
	* (changeStringToInt(maxRange) - changeStringToInt(minRange) + 1 )) + changeStringToInt(minRange);
	console.log(randomInt);
};



button.addEventListener('click', function() {
        displayRange();
        getRandomInt();

});

// Display Name and Guess in Score Section

var grabName1 = document.getElementById('player1name')
var grabName2 = document.getElementById('player2name')
var grabGuess1 = document.getElementById('player1guess')
var grabGuess2 = document.getElementById('player2guess')

var grabNameSpan1 = document.getElementById('challenger-1-name')
var grabNameSpan2 = document.getElementById('challenger-2-name')
var grabGuessP1= document.getElementById('guess1card')
var grabGuessP2= document.getElementById('guess2card')


function changeName() {
    grabNameSpan1.innerHTML = grabName1.value;
    grabNameSpan2.innerHTML =grabName2.value;
}

function changeGuess() {
    card1guess = grabGuess1.value
    card2guess = grabGuess2.value
    grabGuessP1.innerHTML = card1guess
    grabGuessP2.innerHTML = card2guess
}

var guessbtn = document.getElementById('submit-guess')


guessbtn.addEventListener('click', function() {
      changeName();
      changeGuess();
})




// Reset Forms


var resetbtn = document.getElementById('reset-game')

function resetGame() {
      document.getElementById('challenge1').reset();
      document.getElementById('challenge2').reset();
			document.getElementById('rangeform').reset();
			minSpan.innerText = "";
      maxSpan.innerText= "";
}

resetbtn.addEventListener('click', function(){
      resetGame();
});


// Reset Guess

var clearbtn = document.getElementById('clear-game')

clearbtn.addEventListener('click', function() {
      grabGuess1.value = '';
      grabGuess2.value = '';
})

function guessHint() {

  if (card1guess > randomInt) {
    guesshint1.innerHTML = "That's too high";
  } else guesshint1.innerHTML = "That's too low";

	if (card2guess > randomInt) {
    guesshint2.innerHTML = "That's too high";
	} else guesshint2.innerHTML = "That's too low";
	
	if (card1guess == randomInt) {
    guesshint1.innerHTML = "BOOM!";
    guesshint2.innerHTML = "Loser!";
  } else if (card2guess == randomInt) {
    guesshint2.innerHTML = "BOOM!";
    guesshint1.innerHTML = "Loser!";
  } else if (card1guess == card2guess && card1guess == randomInt) {
    guesshint2.innerHTML = "TIE!";
    guesshint1.innerHTML = "TIE!";
  }
		else return
}

var vs1 = document.getElementById('chall1name');
var vs2 = document.getElementById('chall2name');
var winnername = document.getElementById('winnernamecard');
var guesshint1 = document.getElementById('howclose1');
var guesshint2 = document.getElementById('howclose2');

function checkGuess() {

	if (card1guess == card2guess && card1guess == randomInt) {
		alert("It's a TIE! Reset the game to play again");
		return