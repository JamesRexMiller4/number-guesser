var minRange = document.querySelector("#min-range");
var maxRange = document.querySelector("#max-range");
var button = document.querySelector('#update-btn');


function changeToInt(inputField){
  return parsed = parseInt(inputField.value);
}


//
// var inputmin = document.getElementById('min-range');
// var inputmax = document.getElementById('max-range');
var minSpan = document.getElementById('min-span');
var maxSpan = document.getElementById('max-span');

function displayRange() {
 var spanmin = minRange.value;
 var spanmax = maxRange.value;
 minSpan.innerText = spanmin;
 maxSpan.innerText= spanmax;
 event.preventDefault();
 };

 function getRandomInt() {
   event.preventDefault();
   randomInt = Math.floor(Math.random() * (changeToInt(maxRange) - changeToInt(minRange) + 1 )) + changeToInt(minRange);
    console.log(randomInt);
 };



button.addEventListener('click', function() {
        displayRange();
				getRandomInt();
				// stoppedTyping();

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
    card1name = grabName1.value;
    card2name = grabName2.value;
    grabNameSpan1.innerHTML = card1name;
    grabNameSpan2.innerHTML = card2name;
}

function changeGuess() {
    card1guess = grabGuess1.value
    card2guess = grabGuess2.value
    grabGuessP1.innerHTML = card1guess
    grabGuessP2.innerHTML = card2guess
}

// var changecardresult = document.getElementById('result')
var plyr1vs = document.getElementById('chall1name');
var plyr2vs = document.getElementById('chall2name');
var winnername = document.getElementById('winnernamecard');
var guesshint1 = document.getElementById('howclose1');
var guesshint2 = document.getElementById('howclose2');

// function guessHint() {
//   // card1guess = grabGuess1.value
//   // card2guess = grabGuess2.value
//   //
//   if (card1guess > randomInt) {
//     guesshint1.innerHTML = "That's too high";
//   } else guesshint1.innerHTML = "That's too low";
//
//   if (card2guess.value > randomInt) {
//     guesshint2.innerHTML = "That's too high"
//   } else guesshint2.innerHTML = "That's too low"
//
// }

var guessbtn = document.getElementById('submit-guess')


guessbtn.addEventListener('click', function() {
      changeName();
      changeGuess();
      checkGuess();
      // guessHint();
})


// Reset Forms


var resetbtn = document.getElementById('reset-game')

function resetGame() {
      document.getElementById('challenge1').reset();
      document.getElementById('challenge2').reset();
      document.getElementById('rangeform').reset();
      minSpan.innerText = "";
      maxSpan.innerText = "";
}

resetbtn.addEventListener('click', function(){
      document.getElementById('challenge1').reset();
      document.getElementById('challenge2').reset();
      guesshint1.innerHTML = "";
      guesshint2.innerHTML = "";
      grabNameSpan1.innerHTML = "Challenger 1";
      grabNameSpan2.innerHTML = "Challenger 2";
      grabGuessP1.innerHTML = '-';
      grabGuessP2.innerHTML = '-';
      getRandomInt();
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

  if (card1guess == card2guess && card1guess == randomInt) {
    guesshint2.innerHTML = "TIE!";
    guesshint1.innerHTML = "TIE!";
  } else if (card2guess == randomInt) {
    guesshint2.innerHTML = "BOOM!";
    guesshint1.innerHTML = "Loser!";
  } else if (card1guess == randomInt) {
    guesshint1.innerHTML = "BOOM!";
    guesshint2.innerHTML = "Loser!";
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
  if (card1guess == card2guess && card1guess == 42) {
    alert("Don't Panic :) ")
  } else return
}

var guessbtn = document.getElementById('submit-guess')


guessbtn.addEventListener('click', function() {
      changeName();
      changeGuess();
      checkGuess();
      guessHint();
      konamiCode();
})

// Buttons should be disabled if there is not input

function stoppedTyping() {
	var clearGame = document.querySelector('#clear-game')
	if((grabGuess1.value.length > 0 || grabGuess2.value.length > 0)) { 
		clearGame.disabled = false; 
} else {  
		clearGame.disabled = true;
	}
}

// function resetGame() {
// 	var allInputs = document.querySelectorAll('input')
// 	console.log(allInputs)
// 	for (i = 0; i > 5; i++){
// 		allInputs[i].value.length > 0
// 		resetbtn.disabled = false;
// 		i++;
// 	}
// }