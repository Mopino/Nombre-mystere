var guess = document.getElementById ("number")
var RNG = 0

function getRandomEZ (){
    return Math.floor(Math.random() * (9));
}
function getRandomMedium (){
    return Math.floor(Math.random() * (99));
}
function getRandomHard (){
    return Math.floor(Math.random() * (999));
}

function init (){
    RNG = getRandomEZ()
}

function checkGuess (){
    if (guess.value == RNG){

    } else if (guess.value < RNG){

    } else if (guess.value > RNG){

    }
}

init()