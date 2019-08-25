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
   randomInt = Math.floor(Math.random() * (changeString1(maxRange) - changeString2(minRange) + 1 )) + changeString2(minRange);
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
      guesshint1.innerHTML = "";
      guesshint2.innerHTML = "";
      grabNameSpan1.innerHTML = "Challenger 1";
      grabNameSpan2.innerHTML = "Challenger 2";
      grabGuessP1.innerHTML = '-';
      grabGuessP2.innerHTML = '-';
      getRandomInt();
}

resetbtn.addEventListener('click', function(){
      // document.getElementById('challenge1').reset();
      // document.getElementById('challenge2').reset();
      // guesshint1.innerHTML = "";
      // guesshint2.innerHTML = "";
      // grabNameSpan1.innerHTML = "Challenger 1";
      // grabNameSpan2.innerHTML = "Challenger 2";
      // grabGuessP1.innerHTML = '-';
      // grabGuessP2.innerHTML = '-';
      // getRandomInt();
      resetGame();
});

function favoriteColor() {
    var themostimportantquestion = prompt("Whats your favorite color?", "");
    if (themostimportantquestion != null) {
      console.log(`Wow, ${themostimportantquestion} is a cool color, thanks for sharing. Run forthosewhoseek() in the console.`)
    }

}

function cloneCard() {
    var foo1 = document.querySelector('.winnercard')
    var appendfoo = document.querySelector('.mainright')
    var clone =foo1.cloneNode(true)
    appendfoo.appendChild(clone);
}


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
    guesshint2.innerHTML = "TIE!";
    guesshint1.innerHTML = "TIE!";
    alert("It's a TIE! Reset the game to play again");
    event.stopImmediatePropagation();
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
//             \                 \\          ____--__----  /    \_    https://www.youtube.com/watch?v=4a1_GVRtme0
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
