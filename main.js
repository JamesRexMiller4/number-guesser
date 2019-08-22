var minRange = document.querySelector("#min-range");
var maxRange = document.querySelector("#max-range");
var button = document.querySelector('#update-btn');


function changeString2(maxRange){
  return parsed = parseInt(maxRange.value);
}

function changeString1(minRange){
  return parsed = parseInt(minRange.value);
}


button.addEventListener('click', function getRandomInt(event) {
  event.preventDefault();
  let randomInt = Math.floor(Math.random()
   * (changeString1(maxRange) - changeString2(minRange)
    + 1 )) + changeString2(minRange);
   console.log(randomInt)
})
