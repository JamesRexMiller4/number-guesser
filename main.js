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
