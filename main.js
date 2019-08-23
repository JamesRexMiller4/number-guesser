var minRange = document.querySelector("#min-range");
var maxRange = document.querySelector("#max-range");
var button = document.querySelector('#update-btn');


function changeString2(maxRange){
  return parsed = parseInt(maxRange.value);
}

function changeString1(minRange){
  return parsed = parseInt(minRange.value);
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
   let randomInt = Math.floor(Math.random() * (changeString1(maxRange) - changeString2(minRange) + 1 )) + changeString2(minRange);
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
