var minRange = document.querySelector("#min-range");
var maxRange = document.querySelector("#max-range");
var button = document.querySelector('#update-btn');
var newCard = document.querySelector('.cards');
var minSpan = document.getElementById('min-span');
var maxSpan = document.getElementById('max-span');
var grabName1 = document.getElementById('player1name');
var grabName2 = document.getElementById('player2name');
var grabGuess1 = document.getElementById('player1guess');
var grabGuess2 = document.getElementById('player2guess');
var grabNameSpan1 = document.getElementById('challenger-1-name');
var grabNameSpan2 = document.getElementById('challenger-2-name');
var grabGuessP1 = document.getElementById('guess1card');
var grabGuessP2 = document.getElementById('guess2card');
var plyr1vs = document.getElementById('chall1name');
var plyr2vs = document.getElementById('chall2name');
var winnername = document.getElementById('winnernamecard');
var guesshint1 = document.getElementById('howclose1');
var guesshint2 = document.getElementById('howclose2');
var guessbtn = document.getElementById('submit-guess');
var resetbtn = document.getElementById('reset-game');
var clearbtn = document.getElementById('clear-game');
var vs1 = document.getElementById('chall1name');
var vs2 = document.getElementById('chall2name');
var winnername = document.getElementById('winnernamecard');
var card1name = grabName1.value;
var card2name = grabName2.value;
var card1guess = grabGuess1.value;
var card2guess = grabGuess2.value;
var guesscount = 0;
var timestart = 0;

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
  countGuess();
  timeKeeper();
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

newCard.addEventListener('click', deleteCard)

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
  guesscount = 0;
  timestart = 0;
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
    alert("TIE! Reset the game to play again")
  } else if (card2guess == randomInt) {
		winnername = grabName2.value;
    guesshint2.innerHTML = "BOOM!";
		guesshint1.innerHTML = "Loser!";
		createNewCard();
  } else if (card1guess == randomInt) {
		winnername = grabName1.value;
    guesshint1.innerHTML = "BOOM!";
		guesshint2.innerHTML = "Loser!";
		createNewCard();
  } else return
}

function konamiCode() {
  var card1guess = grabGuess1.value;
  var card2guess = grabGuess2.value;
  if (card1guess == card2guess && card1guess == 42) {
    alert("Don't Panic :) ")
  } else return
}

function timeKeeper() {
  if (timestart != 0) {
    return
  } else timestart = new Date();
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

// Secret Button
function favoriteColor() {
    var themostimportantquestion = prompt("Whats your favorite color?", "");
    if (themostimportantquestion != null) {
      console.log(`Wow, ${themostimportantquestion} is a cool color, thanks for sharing. Run forthosewhoseek() in the console.`)
    }
}

// tracks how many guess
function countGuess() {
  guesscount += 1;
}

function resetButtonFunction() {
  var ele = document.getElementsByClassName('reset-function');
  for (i = 0; i < ele.length; i++) {
}
  if (
    grabName1.length == 0 && grabName2.length == 0 &&
    grabGuess1.value == 0 && grabGuess2.value == 0) {
    resetbtn.disabled = true;
  } else
    resetbtn.disabled = false;
}

// displays new card on main right
function createNewCard() {
  timeend = new Date()
  timediff = timeend - timestart
  timediff = (timediff/1000) / 60
  displaytime = timediff.toFixed(2)
  displaycount = guesscount;
	newCard.innerHTML +=
      `<section class="winnercard sectionaside">
      <div class="backgroundcolordiv">
      <div class='cardheader'>
        <p id='chall1name'>${grabName1.value}</p>
          <span class="vs">vs</span>
        <p id='chall2name'>${grabName2.value}</p>
      </div>
        <div class="grayhorizonline top"> </div>
        <div class="centercardname">
          <h2 id="winnernamecard" class="cardnameWin">${winnername}</h2>
           <h3 id="result">Winner</h3>
        </div>
        <div class="grayhorizonline bottom"> </div>
        <div class="cardfooter">
        <span id="spannumofGuess">${displaycount}</span><p>GUESSES</p>
          <span id="spanTimetoWin">${displaytime}</span><p>MINUTES</p>
             <button id="exitbtn" class="delete">X</button>
           </div>
          </div>
         </section>`
	}

  function deleteCard(event) {
  if (event.target.closest('button').classList.contains('delete'))
    event.target.parentNode.parentNode.parentNode.remove();
}



  function forthosewhoseek() {


  //
  //
  //
  // -\-
  // \-- \-
  //  \  - -\
  //   \      \\
  //    \       \
  //     \       \\
  //      \        \\
  //      \          \\
  //      \           \\\
  //       \            \\
  //        \            \\
  //        \. .          \\
  //         \    .       \\
  //          \      .    \\
  //           \       .  \\
  //           \         . \\
  //           \            <=)
  //           \            <==)
  //           \            <=)
  //            \           .\\                                           _-
  //            \         .   \\                                        _-//
  //            \       .     \\                                     _-_/ /
  //            \ . . .        \\                                 _--_/ _/
  //             \              \\                              _- _/ _/
  //             \               \\                      ___-(O) _/ _/
  //             \                \                  __--  __   /_ /      ***********************************
  //             \                 \\          ____--__----  /    \_    https://www.youtube.com/watch?v=KOOhPfMbuIQ
  //              \                  \\       -------       /   \_  \_    ***********************************
  //               \                   \                  //   // \__ \_
  //                \                   \\              //   //      \_ \_
  //                 \                   \\          ///   //          \__-
  //                 \                -   \\/////////    //
  //                 \            -         \_         //
  //                 /        -                      //
  //                /     -                       ///
  //               /   -                       //
  //          __--/                         ///
  // __________/                            // |
  // //-_________      ___                ////  |
  //     ____\__--/                /////    |
  // -----______    -/---________////        |
  //  _______/  --/    \                   |
  // /_________-/       \                   |
  // //                  \                   /
  //                    \.                 /
  //                    \     .            /
  //                     \       .        /
  //                    \\           .    /
  //                     \                /
  //                     \              __|
  //                     \              ==/
  //                     /              //
  //                     /          .  //
  //                     /   .  .    //
  //                    /.           /
  //                   /            //
  //                   /           /
  //                  /          //
  //                 /         //
  //              --/         /
  //             /          //
  //         ////         //
  //      ///_________////
  //
  //
  //



















    console.log("073 102 032 121 111 117 032 104 097 118 101 032 109 097 100 101 032 105 116 032 116 104 105 115 032 102 097 114 032 116 104 101 110 032 073 032 099 111 110 103 114 097 116 117 108 097 116 101 032 121 111 117 046 032 083 111 109 101 032 097 110 115 119 101 114 115 032 111 110 108 121 032 114 101 118 101 097 108 032 116 104 101 109 115 101 108 118 101 115 032 119 104 101 110 032 121 111 117 032 097 115 107 032 116 104 101 032 114 105 103 104 116 032 113 117 101 115 116 105 111 110 046 032 084 104 117 115 044 032 100 105 118 101 032 100 101 101 112 032 105 110 116 111 032 116 104 101 032 114 097 098 098 105 116 032 104 111 108 101 115 046 046 046 032 097 110 100 032 110 101 118 101 114 032 115 116 111 112 032 097 115 107 105 110 103 032 113 117 101 115 116 105 111 110 115 046")
  }
